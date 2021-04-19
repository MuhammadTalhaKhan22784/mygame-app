import React, { useState } from "react";
import pBuildingL from "../assets/p_buildingL.png";
import PropCard3 from "./PropCard3";

const PropCard1 = () => {
  const [cardShow, setCardShow] = useState("show");

  return (
    <React.Fragment>
      {cardShow === "show" ? (
        <div className="prop_card1">
          <h2>BUSINESS</h2>
          <img src={pBuildingL} alt="building" />
          <button
            onClick={() => {
              setCardShow("false");
            }}
          >
            MANAGE
          </button>
        </div>
      ) : (
        <PropCard3 />
      )}
    </React.Fragment>
  );
};

export default PropCard1;
