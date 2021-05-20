import React, { useState } from "react";
import pbuildings from "../assets/p_buildings.png";
import "./style/Street.css";
const Street2 = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="be_box">
        <span>Ean your money here. Prices are real time.</span>
        <span>Inv. Remaining: 75%</span>
      </div>
      <div className="b_body">
        <div className="b_list">
          <div className="obox_head">
            <div>
              <h2 className="fs-6 text-white">User Name</h2>
            </div>
          </div>
          <div className="obox_list street_list">
            <ol>
              <li>
                <span>Black Tar Heroine(1KG)</span>
              </li>
              <li>
                <span>Cocane- Scorpion (1KG)</span>
              </li>
              <li>
                <span>Cocaine- YCC (1KG)</span>
              </li>
              <li>
                <span>Alprazolam (1000 Pcs)</span>
              </li>
              <li>
                <span>Weed-Blue Dream (1KG)</span>
              </li>
              <li>
                <span>9mm</span>
              </li>
              <li>
                <span>Alprazolam (1000 Pcs)</span>
              </li>
              <li>
                <span>Weed-Blue Dream (1KG)</span>
              </li>
              <li>
                <span>9mm</span>
              </li>
              <li>
                <span>Alprazolam (1000 Pcs)</span>
              </li>
              <li>
                <span>Weed-Blue Dream (1KG)</span>
              </li>
              <li>
                <span>9mm</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="bp_box sp_box">
          {show === false ? (
            <>
              <div className="bp_1">
                <img src={pbuildings} alt="..." />
                <div className="d-flex flex-column">
                  <button
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    ATTACK
                  </button>
                </div>
              </div>

              <div className="bp_2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  provident fugit dolore ipsa sit amet consectetur.
                </p>
              </div>
            </>
          ) : (
            <div className="d-flex align-items-center flex-column w-100 h-100">
              <span style={{ color: "#2eb12e", fontSize:"3rem",fontWeight:"bold" }}>Success</span>
              <div className="mt-2 d-flex justify-content-between w-100">
                <div className="d-flex flex-column w-50 align-items-center">
                  <span style={{ color: "#65bda9" }}>+$5000</span>
                  <span style={{ color: "#65bda9" }}>+Item 1</span>
                  <span style={{ color: "#65bda9" }}>+Item 1</span>
                  <span style={{ color: "#65bda9" }}>+Item 2</span>
                </div>
                <div className="d-flex flex-column w-50 align-items-center">
                  <span style={{ color: "#65bda9" }}>+$5000</span>
                  <span style={{ color: "#65bda9" }}>+Item 1</span>
                  <span style={{ color: "#65bda9" }}>+Item 1</span>
                  <span style={{ color: "#65bda9" }}>+Item 2</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Street2;
