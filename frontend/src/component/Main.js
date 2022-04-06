import React from "react";
import "./Main.scss";
import Order from "./Order";
import Produce from "./Produce";
import Ready from "./Ready";

const Main = () => {
  const maxOrder = 8;
  return (
    <div className="DID">
      <Order maxOrder={maxOrder} />
      <Produce maxOrder={maxOrder} />
      <Ready maxOrder={maxOrder - 1} />
    </div>
  );
};

export default Main;
