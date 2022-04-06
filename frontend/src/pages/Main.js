import React from "react";
import "./Main.scss";
import Order from "../component/Order";
import Produce from "../component/Produce";
import Ready from "../component/Ready";
import DID from "../component/DID";

const Main = () => {
  const maxOrder = 8;
  return (
    <div className="DID">
      {/* <Order maxOrder={maxOrder} type={"order"} />
      <Produce maxOrder={maxOrder} type={"produce"} />
      <Ready maxOrder={maxOrder - 1} type={"ready"} /> */}
      <DID maxOrder={maxOrder} />
    </div>
  );
};

export default Main;
