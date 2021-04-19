import React, { useState } from "react";
import SuperRange from "../Utills/Range";
import pBuildingS from "../assets/p_buildings.png";
import PropCard4 from "./PropCard4";
import PropCard5 from "./PropCard5";

const PropCard3 = () => {
  const [cardShow, setCardShow] = useState("show");

  return (
    <React.Fragment>
      {cardShow === "show" ? (
        <div className="prop_card3">
          <div className="pcard3_header">
            <img src={pBuildingS} alt="building" />
            <div className="burn_cus">
              <h3>BUSINESS</h3>
              <button
                onClick={() => {
                  setCardShow("false1");
                }}
              >
                BURN
              </button>
            </div>
          </div>
          <div className="pcard3_middle">
            <p>
              Majority have suffered alteration in some form, by injected
              humour, or ran majority
            </p>
            <button
              onClick={() => {
                setCardShow("false");
              }}
            >
              COLLECT
            </button>
          </div>
          <SuperRange />
        </div>
      ) : cardShow === "false1" ? (
        <PropCard4 />
      ) : (
        <PropCard5 />
      )}
    </React.Fragment>
  );
};

export default PropCard3;
