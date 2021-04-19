import React, { useState } from "react";
import PropCard2 from "./PropCard2";

const PropCard4 = () => {
  const [cardShow, setCardShow] = useState("show");

  return (
    <React.Fragment>
      {cardShow === "show" ? (
        <div className="prop_card4">
          <div>
            <h2>BUSINESS NMAE</h2>
            <h3>LEVEL 3</h3>
            <h2>Burned</h2>
            <button
              onClick={() => {
                setCardShow("false");
              }}
            >
              WRITE OFF
            </button>
          </div>
        </div>
      ) : (
        <PropCard2 />
      )}
    </React.Fragment>
  );
};

export default PropCard4;
