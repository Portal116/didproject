import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DID.scss";

const DID = (props) => {
  const [orderData, setOrderData] = useState([]);
  const [produceData, setProduceData] = useState([]);
  const [readyData, setReadyData] = useState([]);
  useEffect(() => {
    getOrder("order");
    getOrder("produce");
    getOrder("ready");
  }, []);
  const insertOrder = () => {
    axios({
      url: `/api/insertOrder/${1}`,
      method: "post",
    }).then(() => {
      getOrder("order");
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
      getOrder("order");
      getOrder("produce");
      getOrder("ready");
    });
  };
  const deleteOrder = (id) => {
    axios({
      url: `/api/deleteOrder/${id}`,
      method: "delete",
    }).then(() => {
      getOrder("ready");
    });
  };
  return (
    <div>
      <div className="container_order">
        <div className="name">
          <span
            onClick={() => {
              insertOrder();
            }}
          >
            주문접수
          </span>
        </div>
        <div className="main">
          <span className="description">주문이 확인되었습니다.</span>
          <div className="number_panel">
            {orderData.map((data, index) => (
              <div key={index} onClick={() => updateOrder(data)}>
                <span>{data.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container_produce">
        <div className="name">
          <span>제조중</span>
        </div>
        <div className="main">
          <span className="description">제품을 준비중 입니다.</span>
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
        </div>
      </div>
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
    </div>
  );
};

export default DID;
