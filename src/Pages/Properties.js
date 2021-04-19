import React from "react";
import "./style/Properties.css";
import PropCard1 from "../PropertyComponents/PropCard1";
import PropCard2 from "../PropertyComponents/PropCard2";
import PropCard3 from "../PropertyComponents/PropCard3";
const Properties = () => {
  return (
    <React.Fragment>
      <div className="properties_nav">
        <h2>PROPERTIES</h2>
      </div>
      <div className="properties_main">
        <div className="properties_content">
          <PropCard1 />
          <PropCard2 />
          <PropCard3 />
        </div>
        <div className="prop_main_bottom">
          <div className="pmain_left">
            <h2>PROPERTIES AVAILABLE</h2>
            <div>
              <div className="pm_l_head">
                <h2>Buy properties to increase networth & inventory space</h2>
              </div>

              <div className="pm_l_content">
                <ul>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    <button>BUY</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    <button>BUY</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    <button>BUY</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pmain_left">
            <h2>PROPERTIES OWN</h2>
            <div>
              <div className="pm_l_head">
                <h2>Current inventory space: xx, xx,xx</h2>
              </div>

              <div className="pm_l_content">
                <ul>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    <button>LIQUIDATE</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    <button>LIQUIDATE</button>
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    <button>LIQUIDATE</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Properties;
