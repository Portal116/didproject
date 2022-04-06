import React from "react";
import "./Order.scss";

const Order = (props) => {
  return (
    <div className="container_order">
      {props.maxOrder}
      <div class="name">
        <span>주문접수</span>
      </div>
      <div className="main">
        <span className="description">주문이 확인되었습니다.</span>
        <div className="number_panel">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
