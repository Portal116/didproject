import React, { useCallback, useEffect, useState } from "react";
import "./Main.scss";
import DID from "../../component/did/DID";
import Modal from "../../component/did/modal/Modal";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [changed, setChanged] = useState("none");
  const [modalNum, setModalNum] = useState(0);
  const [openSetting, setOpenSetting] = useState("none");
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const moveToSetting = useCallback(
    () => navigate("/setting", { replace: true }),
    [navigate]
  );
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
  useEffect(() => {
    if (modalNum !== 0) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          setModalNum(0);
        }, 2000)
      );
    }
  }, [modalNum]);
  const showSetting = (location) => {
    if (openSetting === "none") {
      setOpenSetting(location);
    } else if (openSetting !== location) {
      moveToSetting();
    }
    setTimeout(() => {
      setOpenSetting("none");
    }, 1000);
  };
  return (
    <div className="DID">
      <button
        className="leftTopBtn"
        onClick={() => {
          showSetting("left");
        }}
      ></button>
      <button
        className="rightTopBtn"
        onClick={() => {
          showSetting("right");
        }}
      ></button>
      {/* db ip, db 포트, db 명 = didproject, id = root, pw = 1234 */}
      {modalNum !== 0 && <Modal modalNum={modalNum} />}
      {/* <Modal modalNum={modalNum} /> */}
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
        setModalNum={setModalNum}
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
