import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Produce.scss";

const Produce = (props) => {
  const [produceData, setProduceData] = useState([]);
  useEffect(() => {
    getProduce();
  }, []);
  const getProduce = () => {
    axios.get(`/api/getData`, {
      state: "produce",
      limit: props.maxOrder,
    });
  };
  return (
    <div className="container_produce">
      <div className="name">
        <span>제조중</span>
      </div>
      <div className="main">
        <span className="description">제품을 준비중 입니다.</span>
        <div className="number_panel">
          {produceData.map((data, index) => (
            <div key={index}>
              <span>{data.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produce;
