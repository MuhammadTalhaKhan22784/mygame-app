import React from "react";
import "./style/GangProperties.css";
// import { HiArrowNarrowLeft } from "react-icons/hi";
// import { HiArrowNarrowRight } from "react-icons/hi";
import { useHistory } from "react-router-dom";

const GangProperties = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="gang_nav">
        <h2>GANG</h2>
      </div>
      <div className="gp_main">
        {/* <div className="gp_top">
          <div className="buy_sell_box">
            <div className="barrow">
              <Link className="" to="/gang-overview">
                <HiArrowNarrowLeft />
              </Link>
            </div>
            <button>Member Buy/Sell</button>
            <div className="barrow">
              <HiArrowNarrowRight />
            </div>
          </div>
        </div> */}
        <div className="o_content">
          <div className="o_tabs">
            <button
              onClick={() => {
                history.push("/gang-overview");
              }}
            >
              Overview
            </button>
            <button>Activities</button>
          </div>
        </div>
        <div className="gp_hero">
          <div className="gp_c">
            <div className="gp_table">
              <div className="th1">
                <div className="gp_bg">
                  <span style={{ color: "#bf2b25" }}>Max inv. xxg</span>
                </div>
                <hr />
                <div className="gp_bg">Buy Price</div>
                <div className="gp_bg">Sell Price</div>
                <div className="gp_bg">Qty Avlbe</div>
              </div>

              <div className="th2">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>
              </div>
             
              <div className="th2">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>
              </div>
             
              <div className="th2">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>
              </div>
             
              <div className="th2">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>
              </div>
             
              <div className="th2">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>

                <div className="gp_bg">0</div>
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
      </div>
    </React.Fragment>
  );
};

export default GangProperties;
