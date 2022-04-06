import React from "react";
import "./Ready.scss";

const Ready = (props) => {
  return (
    <div className="container_ready">
      {props.maxOrder}
      <div class="name">
        <span>준비완료</span>
      </div>
      <div className="main">
        <span className="description">주문하신 제품이 준비되었습니다.</span>
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

export default Ready;
