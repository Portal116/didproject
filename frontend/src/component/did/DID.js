import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DID.scss";

const DID = (props) => {
  const [orderData, setOrderData] = useState([]);
  const [produceData, setProduceData] = useState([]);
  const [readyData, setReadyData] = useState([]);

  useEffect(() => {
    switch (props.type.name) {
      case "order":
        getOrder("order");
        break;
      case "produce":
        getOrder("produce");
        break;
      case "ready":
        getOrder("ready");
        break;
    }
  }, []);
  useEffect(() => {
    switch (props.changed) {
      case "insert":
        if (props.type.name === "order") getOrder("order");
        break;
      case "order":
        if (props.type.name === "order") getOrder("order");
        if (props.type.name === "produce") getOrder("produce");
        break;
      case "produce":
        if (props.type.name === "produce") getOrder("produce");
        if (props.type.name === "ready") getOrder("ready");
        break;
      case "delete":
        if (props.type.name === "ready") getOrder("ready");
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
      switch (state) {
        case "order":
          setOrderData(res.data);
          break;
        case "produce":
          setProduceData(res.data);
          break;
        case "ready":
          setReadyData(res.data);
          break;
      }
    });
  };
  const updateOrder = (data) => {
    axios({
      url: `/api/updateOrder`,
      method: "put",
      data: data,
    }).then(() => {
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
          {props.type.name === "order" && (
            <div className="number_panel">
              {orderData.map((data, index) => (
                <div key={index} onClick={() => updateOrder(data)}>
                  <span>{data.id}</span>
                </div>
              ))}
            </div>
          )}
          {props.type.name === "produce" && (
            <div className="number_panel">
              {produceData.map((data, index) => (
                <div
                  key={index}
                  onClick={() => {
                    updateOrder(data);
                  }}
                >
                  <span>{data.id}</span>
                </div>
              ))}
            </div>
          )}
          {props.type.name === "ready" && (
            <div className="number_panel">
              {readyData.map((data, index) => (
                <div
                  key={index}
                  onClick={() => {
                    deleteOrder(data.id);
                  }}
                >
                  <span>{data.id}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DID;
