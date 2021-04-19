import React, { useState } from "react";
import SuperRange from "../Utills/Range";
import pBuildingS from "../assets/p_buildings.png";
import PropCard4 from "./PropCard4";

const PropCard3 = () => {
  const [cardShow, setCardShow] = useState("show");

  return (
    <React.Fragment>
      {cardShow === "show" ? (
        <div className="prop_card3">
          <div className="pcard3_header">
            <img src={pBuildingS} alt="building" />
            <button onClick={() => {setCardShow("false")}}>BURN</button>
          </div>
          <div className="pcard3_middle">
            <p>
              Majority have suffered alteration in some form, by injected
              humour, or ran majority
            </p>
            <button>OPEN</button>
          </div>
          <SuperRange />
        </div>
      ) : (
        <PropCard4 />
      )}
    </React.Fragment>
  );
};

export default PropCard3;
