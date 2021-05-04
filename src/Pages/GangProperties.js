import React, { useState } from "react";
import "./style/GangProperties.css";

const GangProperties = () => {
  const [showTab, setShowTab] = useState(false);

  return (
    <React.Fragment>
      {/* <div className="gp_main"> */}

      <div className="gp_hero">
        <div className="gp_c">
          <div className="gp_table">
            <div className="th1">
              <div className="gp_bg">
                <span style={{ color: "#bf2b25" }}>Max inv. xxg</span>
              </div>
              <hr />
              <div className="gp_bg gptr">Buy Price</div>
              <div className="gp_bg gptr">Sell Price</div>
              <div className="gp_bg gptr">Qty Avlbe</div>
            </div>

            <div className="th1">
              <div className="gp_bg_img">
                <div className="gp_img_text">Item Name</div>
              </div>
              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr bt_th">0</div>
            </div>

            <div className="th1">
              <div className="gp_bg_img">
                <div className="gp_img_text">Item Name</div>
              </div>
              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr bt_th">0</div>
            </div>

            <div className="th1">
              <div className="gp_bg_img">
                <div className="gp_img_text">Item Name</div>
              </div>
              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr bt_th">0</div>
            </div>

            <div className="th1">
              <div className="gp_bg_img">
                <div className="gp_img_text">Item Name</div>
              </div>
              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr bt_th">0</div>
            </div>

            <div className="th1">
              <div className="gp_bg_img">
                <div className="gp_img_text">Item Name</div>
              </div>
              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr">0</div>

              <div className="gp_bg gptr">0</div>
            </div>
          </div>
        </div>

        <div className="gp_bottom">
          <button style={{ backgroundColor: "#01450C" }}>BUY MAX</button>
          <button style={{ backgroundColor: "#0E0D12" }}>BUY</button>
          <input type="text" placeholder="INPUT" />
          <button style={{ backgroundColor: "#0E0D12" }}>SELL</button>
          <button style={{ backgroundColor: "#450203" }}>SELL MAX</button>
        </div>
        <div className="gangmission_btn">
          <button>GANG MISSION COMMING SOON</button>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default GangProperties;
