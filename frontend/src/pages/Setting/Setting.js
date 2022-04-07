import React from "react";
import { Link } from "react-router-dom";
import "./Setting.scss";

const Setting = () => {
  return (
    <div className="setting">
      <Link to="/">
        <button>돌아가기</button>
      </Link>
    </div>
  );
};

export default Setting;
