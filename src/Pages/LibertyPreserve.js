import React from "react";
import Logo from "../assets/logo.png";
import Lock from "../assets/lock.png";
import WatchAdd from "../assets/watch_ad.png";

const LibertyPreserve = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <header className="header">
          <div className="header_left_box">
            <img src={Logo} alt="" />
            <div className="top_text d-flex flex-column">
              <h2 className="fs-1">Liberty</h2>
              <h2 className="fs-1">Preserve</h2>
            </div>
          </div>
          <div className="header_right_box">
            <p className="fs-5 lh-base">
              Private, secure banking...anywhere in the US.
            </p>
          </div>
        </header>
        <div className="c_hr"></div>
        <div className="bg_img">
          <div className="main_content">
            <div className="bg_top_content">
              <h2 className="fs-1">Welcome, username</h2>
              <img src={Lock} alt="" />
            </div>
            <div className="bg_input_content">
              <div className="input_fields">
                <label className="fs-5" htmlFor="current_balance">
                  Current Balance
                </label>
                <input
                  type="text"
                  name="current_balance"
                  id="current_balance"
                  placeholder="5,000,650.00 USD"
                />
              </div>
              <div className="input_fields mt-3">
                <label className="fs-5" htmlFor="enter_ammount">
                  Enter Amount
                </label>
                <input
                  className="mr"
                  type="text"
                  name="enter_ammount"
                  id="enter_ammount"
                  placeholder="5,000,650.00 USD"
                />
              </div>
            </div>
            <div className="watch_add_content">
              <div className="watchadd_item">
                <button>
                  <img src={WatchAdd} alt="" />
                </button>
                <p className="fs-5 mt-2 lh-base">
                  Watch ad for free random bank deposit.
                </p>
              </div>
              <div className="dv_buttons">
                <button type="button" class="btn btn-labeled btn-deposit">
                  <span class="btn-label">
                    + <i class="fas fa-dollar-sign"></i>
                  </span>
                  Deposit
                </button>
                <button type="button" class="btn btn-labeled btn-withdraw">
                  <span class="btn-label">
                    - <i class="fas fa-dollar-sign"></i>
                  </span>
                  Withdraw
                </button>
                <p className="fs-5 mt-2">This ATM charges a 30% deposit fee.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="c_hr"></div>
        <footer className="footer"></footer>
      </React.Fragment>
    </React.Fragment>
  );
};

export default LibertyPreserve;
