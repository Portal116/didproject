import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DID.scss";

const DID = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrder(props.type.name);
  }, []);
  useEffect(() => {
    switch (props.type.name) {
      case "order":
        if (props.changed === "insert" || props.changed === "order") {
          getOrder(props.type.name);
        }
        break;
      case "produce":
        if (props.changed === "order" || props.changed === "produce") {
          getOrder(props.type.name);
        }
        break;
      case "ready":
        if (props.changed === "produce" || props.changed === "delete") {
          getOrder(props.type.name);
        }
        break;
    }
    props.setChanged("none");
  }, [props.changed]);

  const insertOrder = () => {
    axios({
      url: `/api/insertOrder/${1}`,
      method: "post",
    }).then(() => {
      props.setChanged("insert");
    });
  };
  const getOrder = (state) => {
    axios({
      url: `/api/getOrder`,
      method: "get",
      params: {
        state: state,
        limit: props.maxOrder,
      },
    }).then((res) => {
      setData(res.data);
    });
  };
  const updateOrder = (data) => {
    axios({
      url: `/api/updateOrder`,
      method: "put",
      data: data,
    }).then(() => {
      if (data.state === "produce") {
        props.setModalNum(data.id);
      }
      props.setChanged(data.state);
    });
  };
  const deleteOrder = (id) => {
    axios({
      url: `/api/deleteOrder/${id}`,
      method: "delete",
    }).then(() => {
      props.setChanged("delete");
    });
  };

  return (
    <div>
      <div className={"container_" + props.type.name}>
        <div className="name">
          {props.type.name === "order" && (
            <span
              onClick={() => {
                insertOrder();
              }}
            >
              {props.type.title}
            </span>
          )}
          {props.type.name !== "order" && <span>{props.type.title}</span>}
        </div>
        <div className="main">
          <span className="description">{props.type.description}</span>
          <div className="number_panel">
            {data.map((data, index) => (
              <div
                key={index}
                onClick={() =>
                  props.type.name === "ready"
                    ? deleteOrder(data.id)
                    : updateOrder(data)
                }
              >
                <span>{data.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DID;
