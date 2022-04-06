import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Order.scss";

const Order = (props) => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);
  const getOrder = () => {
    axios.get(`/api/getData`, {
      state: "order",
      limit: props.maxOrder,
    });
  };
  return (
    <div className="container_order">
      <div className="name">
        <span>주문접수</span>
      </div>
      <div className="main">
        <span className="description">주문이 확인되었습니다.</span>
        <div className="number_panel">
          {orderData.map((data, index) => (
            <div key={index}>
              <span>{data.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
