import React, { useState } from "react";
import "../Pages/style/Properties.css";
import PropCard2 from "./PropCard2";
const PropCard5 = () => {
  const [cardShow, setCardShow] = useState("show");

  return (
    <React.Fragment>
      {cardShow === "show" ? (
        <div className="prop_card5">
          <div>
          <h2>BUSINESS NAME</h2>
          <h3>LEVEL 5</h3>
            <h2>ABANDONED</h2>
            <button onClick={()=>{setCardShow("false")}}>RECOVER</button>
          </div>
        </div>
      ) : (
        <PropCard2 />
      )}
    </React.Fragment>
  );
};

export default PropCard5;
