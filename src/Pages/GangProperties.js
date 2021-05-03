import React from "react";
import "./style/GangProperties.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const GangProperties = () => {
  return (
    <React.Fragment>
      <div className="gang_nav">
        <h2>GANG</h2>
      </div>
      <div className="gp_main">
        <div className="gp_top">
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
        </div>
        <div className="gp_hero">
          <div className="gp_c">
            <table className="gp_table">
              <th>
                <div className="gp_bg">
                  <span style={{ color: "#bf2b25" }}>Max inv. xxg</span>
                </div>
                <hr />
              </th>
              <th className="bt_th">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
              </th>
              <th className="bt_th">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
              </th>
              <th className="bt_th">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
              </th>
              <th className="bt_th">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
              </th>
              <th className="bt_th">
                <div className="gp_bg_img">
                  <div className="gp_img_text">Item Name</div>
                </div>
              </th>
              <tr>
                <td>
                  <div className="gp_bg">Buy Price</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="gp_bg">Sell Price</div>
                </td>
                <td>
                  <div className="gp_bg">0</div>
                </td>
                <td>
                  <div className="gp_bg">0</div>
                </td>
                <td>
                  <div className="gp_bg">0</div>
                </td>
                <td>
                  <div className="gp_bg">0</div>
                </td>
                <td>
                  <div className="gp_bg">0</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="gp_bg">Qty Avlbe</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
                <td>
                  <div className="gp_bg bt_th">0</div>
                </td>
              </tr>
            </table>
          </div>

          <div className="gp_bottom">
            <button style={{ backgroundColor: "#01450C" }}>BUY MAX</button>
            <button style={{ backgroundColor: "#0E0D12" }}>BUY</button>
            <input type="text" placeholder="INPUT" />
            <button style={{ backgroundColor: "#0E0D12" }}>BUY MAX</button>
            <button style={{ backgroundColor: "#450203" }}>BUY MAX</button>
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
