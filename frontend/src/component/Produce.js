import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Produce.scss";

const Produce = (props) => {
  const [produceData, setProduceData] = useState([]);
  useEffect(() => {
    getProduce();
  }, []);
  const getProduce = () => {
    axios({
      url: `/api/getOrder`,
      method: "get",
      params: {
        state: "produce",
        limit: props.maxOrder,
      },
    }).then((res) => {
      setProduceData(res.data);
    });
  };
  const updateProduce = (id) => {
    axios({
      url: `/api/updateOrder`,
      method: "put",
      params: {
        id: id,
        state: "ready",
      },
    }).then(() => {
      getProduce();
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
            <div
              key={index}
              onClick={() => {
                updateProduce(data.id);
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

export default Produce;
