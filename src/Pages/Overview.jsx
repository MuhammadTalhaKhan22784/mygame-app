import React from "react";
import "./style/Overview.css";

import blueRectangle from "../assets/blue_rectangle.png";
import yellowRectangle from "../assets/yellow_rectangle.png";
import redRectangle from "../assets/red_rectangle.png";
import { useHistory } from "react-router";

const Overview = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="gang_nav">
        <h2>GANG</h2>
      </div>
      <div className="o_main">
        <div className="o_content">
          <div className="o_tabs">
            <button>Overview</button>
            <button
              onClick={() => {
                history.push("/gang-properties");
              }}
            >
              Activities
            </button>
          </div>
          <div className="overview_box">
            <div className="obox_1">
              <div className="obox_title">
                <h2>Gang Tag</h2>
                <h2>Gang Name</h2>
                <h2>1st</h2>
              </div>
              <div className="obox_head">
                <div>
                  <h2 className="fs-6 text-white">MEMBER LIST</h2>
                </div>
                <div className="d-flex align-items-center">
                  <span>TRAVELLING</span>
                  <img
                    src={blueRectangle}
                    style={{ width: "10px" }}
                    style={{ width: "10px", marginLeft: "5px" }}
                    alt="..."
                  />
                </div>
                <div className="d-flex align-items-center">
                  <span>JAIL</span>
                  <img
                    src={yellowRectangle}
                    style={{ width: "10px", marginLeft: "5px" }}
                    alt="..."
                  />
                </div>
                <div className="d-flex align-items-center">
                  <span>HOSPITAL</span>
                  <img
                    src={redRectangle}
                    style={{ width: "10px", marginLeft: "5px" }}
                    alt="..."
                  />
                </div>
              </div>
              <div className="obox_list">
                <ol>
                  <li className="olistbg_yellow">
                    <span>Member1</span>
                    <span>Member1</span>
                    <span>STATS</span>
                  </li>
                  <li className="olistbg_red">
                    <span>Member2</span>
                    <span>Member1</span>
                    <span>STATS</span>
                  </li>
                  <li className="olistbg_gray">
                    <span>Member3</span>
                    <span>Member1</span>
                    <span>STATS</span>
                  </li>
                  <li className="olistbg_red">
                    <span>Member4</span>
                    <span>Member1</span>
                    <span>STATS</span>
                  </li>
                  <li className="olistbg_gray">
                    <span>Member5</span>
                    <span>Member1</span>
                    <span>STATS</span>
                  </li>
                  <li className="olistbg_gray">
                    <span>Member6</span>
                    <span>Member1</span>
                    <span>STATS</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="obox_2">
              <div className="oCard">
                <h2>GANG HQ</h2>
              </div>
              <div className="oe_card expense_card">
                <span className="mb-2">Gang Expense(7d)</span>
                <h2>-$540,000</h2>
              </div>
              <div className="oe_card vault_card">
                <span className="mb-1">Gang Vault</span>
                <h2 className="mb-1">-$2,000,000</h2>
                <button>PAY OUT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="o_buttons">
          <button className="mr_10px">OPTIONS</button>
          <button>STATS</button>
        </div>
       
      </div>
    </React.Fragment>
  );
};

export default Overview;
