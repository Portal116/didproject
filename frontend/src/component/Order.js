import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Order.scss";

const Order = (props) => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);
  const insertOrder = () => {
    axios({
      url: `/api/insertOrder/${1}`,
      method: "post",
    }).then(() => {
      getOrder();
    });
  };
  const getOrder = () => {
    axios({
      url: `/api/getOrder`,
      method: "get",
      params: {
        state: "order",
        limit: props.maxOrder,
      },
    }).then((res) => {
      setOrderData(res.data);
    });
  };
  const updateOrder = (id) => {
    axios({
      url: `/api/updateOrder`,
      method: "put",
      params: {
        id: id,
        state: "produce",
      },
    }).then(() => {
      getOrder();
    });
  };
  return (
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
            <div key={index} onClick={() => updateOrder(data.id)}>
              <span>{data.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
