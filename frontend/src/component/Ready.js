import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Ready.scss";

const Ready = (props) => {
  const [readyData, setReadyData] = useState([]);
  useEffect(() => {
    getReady();
  }, []);
  const getReady = () => {
    axios({
      url: `/api/getOrder`,
      method: "get",
      params: {
        state: "ready",
        limit: props.maxOrder,
      },
    }).then((res) => {
      setReadyData(res.data);
    });
  };
  const deleteOrder = (id) => {
    axios({
      url: `/api/deleteOrder/${id}`,
      method: "delete",
    }).then(() => {
      getReady();
    });
  };
  return (
    <div className="container_ready">
      <div className="name">
        <span>준비완료</span>
      </div>
      <div className="main">
        <span className="description">주문하신 제품이 준비되었습니다.</span>
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
      </div>
    </div>
  );
};

export default Ready;
