import React, { useState } from "react";
import "./Main.scss";
import DID from "../component/did/DID";

const Main = () => {
  const [changed, setChanged] = useState("none");
  const maxOrder = 8;
  const order = {
    name: "order",
    title: "주문접수",
    description: "주문이 확인되었습니다.",
  };
  const produce = {
    name: "produce",
    title: "제조중",
    description: "제품을 준비중 입니다.",
  };
  const ready = {
    name: "ready",
    title: "준비완료",
    description: "주문하신 제품이 준비되었습니다.",
  };
  return (
    <div className="DID">
      <DID
        maxOrder={maxOrder}
        type={order}
        setChanged={setChanged}
        changed={changed}
      />
      <DID
        maxOrder={maxOrder}
        type={produce}
        setChanged={setChanged}
        changed={changed}
      />
      <DID
        maxOrder={maxOrder - 1}
        type={ready}
        setChanged={setChanged}
        changed={changed}
      />
    </div>
  );
};

export default Main;
