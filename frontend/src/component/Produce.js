import React from "react";
import "./Produce.scss";

const Produce = (props) => {
  return (
    <div className="container_produce">
      {props.maxOrder}
      <div class="name">
        <span>제조중</span>
      </div>
      <div className="main">
        <span className="description">제품을 준비중 입니다.</span>
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

export default Produce;
