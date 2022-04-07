import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <div className="container_modal">
      <div className="title">
        <span>카운터에서 제품을 받으세요.</span>
      </div>
      <div className="content">
        <span>{props.modalNum}</span>
      </div>
    </div>
  );
};

export default Modal;
