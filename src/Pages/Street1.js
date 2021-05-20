import React, { useState } from "react";
import pbuildings from "../assets/p_buildings.png";
import LocalWork from "./LocalWork";
import Street2 from "./Street2";
import "./style/Street.css";
const Street1 = () => {
  const [show, setShow] = useState("1");
  const listData = [
    {
      itemName: "Black Tar Heroine(1KG)",
      qtvAvl: "52",
      id: "01",
    },
    {
      itemName: "Cocane- Scorpion (1KG)",
      qtvAvl: "24",
      id: "02",
    },
    {
      itemName: "Cocane- YCC (1KG)",
      qtvAvl: "11",
      id: "03",
    },
    {
      itemName: "Alprazolam (1000 Pcs)",
      qtvAvl: "100",
      id: "04",
    },
    {
      itemName: "Weed-Blue Dream (1KG)",
      qtvAvl: "10",
      id: "05",
    },
    {
      itemName: "9mm",
      qtvAvl: "4",
      id: "06",
    },
    {
      itemName: "Alprazolam (1000 Pcs)",
      qtvAvl: "40",
      id: "07",
    },
    {
      itemName: "Alprazolam (1000 Pcs)",
      qtvAvl: "14",
      id: "08",
    },
    {
      itemName: "Cocane- YCC (1KG)",
      qtvAvl: "11",
      id: "09",
    },
    {
      itemName: "Alprazolam (1000 Pcs)",
      qtvAvl: "100",
      id: "10",
    },
    {
      itemName: "Cocane- YCC (1KG)",
      qtvAvl: "11",
      id: "11",
    },
    {
      itemName: "Alprazolam (1000 Pcs)",
      qtvAvl: "100",
      id: "12",
    },
  ];

  let [trans, setTrans] = useState([]);

  const handleTransalte = (event) => {
    let filter = listData.filter((val) => val.id === event);
    // console.log(event)
    // console.log(filter)
    setTrans(filter);
    console.log(trans);
  };
  return (
    <React.Fragment>
      <div className="b_main">
        <div className="b_header">
          <button
            style={{
              backgroundColor: show === "1" ? "black" : "transparent",
            }}
            onClick={() => {
              setShow("1");
            }}
          >
            Buy/Sell
          </button>
          <button
            style={{ backgroundColor: show === "2" ? "black" : "transparent" }}
            onClick={() => {
              setShow("2");
            }}
          >
            Attack
          </button>
          <button
            style={{
              backgroundColor: show === "3" ? "black" : "transparent",
            }}
            onClick={() => {
              setShow("3");
            }}
          >
            Local Work
          </button>
        </div>
        {show === "1" ? (
          <>
            <div className="be_box">
              <span>Ean your money here. Prices are real time.</span>
              <span>Inv. Remaining: 75%</span>
            </div>
            <div className="b_body">
              <div className="b_list">
                <div className="obox_head">
                  <div>
                    <h2 className="fs-6 text-white">Item Name</h2>
                  </div>
                  <div className="d-flex align-items-center">
                    <span>Qty Avlbe:</span>
                  </div>
                </div>
                <div className="obox_list">
                  <ol>
                    {listData.map((val, i) => (
                      <li key={i} onClick={() => handleTransalte(val.id)}>
                        <span>{val.itemName}</span>
                        <span>{val.qtvAvl}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bp_box">
                <div className="bp_1">
                  <img src={pbuildings} alt="..." />
                  <div className="d-flex flex-column">
                    <span>Item Name</span>
                    {trans.map((val, i) => (
                      <span>Available to Buy {val.qtvAvl}</span>
                    ))}
                    <span>Inventory to sell: 2kg</span>
                  </div>
                </div>
                <div className="bp_2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem provident fugit.
                  </p>
                </div>
              </div>
            </div>

            <div className="gp_bottom">
              <button style={{ backgroundColor: "#01450C" }}>BUY MAX</button>
              <button style={{ backgroundColor: "#0E0D12" }}>BUY</button>
              <input type="text" placeholder="000.0000" />
              <button style={{ backgroundColor: "#0E0D12" }}>SELL</button>
              <button style={{ backgroundColor: "#450203" }}>SELL MAX</button>
            </div>
          </>
        ) : show === "2" ? (
          <Street2 />
        ) : (
          <LocalWork />
        )}
      </div>
    </React.Fragment>
  );
};

export default Street1;
