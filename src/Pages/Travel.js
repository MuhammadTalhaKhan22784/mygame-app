import React from "react";
import { useHistory } from "react-router";
import range from "../assets/Asset 2.png";
import "./style/Travel.css";
const Travel = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="travel_nav">
        <div className="tr_text">
          <h2>TRAVEL</h2>
        </div>
        <div className="tr_dropdown">
          <div className="dropdown">
            <h2 className="drp_text text-white">Destination CITY</h2>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Enter your destinaton
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="travel_container">
        <div className="travel_hero" onClick={history.push("#")}>
          <div className="travel_box">
            <div className="tbox_content">
              <h5>Car</h5>
              <div className="tbox_subcontent">
                <span>
                  Arrival Time: <span className="ms-5">10 am</span>
                </span>
                <span>
                  Inventory Summary: <span className="ms-3">$200</span>{" "}
                </span>
              </div>
              <p>For car, let's put a third line</p>
              <div className="risk_range">
                <span>Risk</span>
                <img className="range" src={range} alt="" />
              </div>
            </div>
            <div className="tbox_cost">
              <h5 className="fs-2 text-orange text-center">
                VALET <br /> XXX
              </h5>
            </div>
            <div className="tbox_cost">
              <h5 className="fs-2 text-center">
                TOTAL <br /> 52$
              </h5>
            </div>
          </div>
          {/* <IoIosArrowDroprightCircle className="text-white io_arrow" /> */}
          {/* <span className="go">
            Click To <br />
            Go
          </span> */}

          <div className="travel_box_btn travel_btn_img1"></div>
        </div>
        <div className="travel_hero" onClick={history.push("#")}>
          <div className="travel_box">
            <div className="tbox_content">
              <h5>Bus</h5>
              <div className="tbox_subcontent">
                <span>
                  Arrival Time: <span className="ms-5">10 am</span>
                </span>
                <span>
                  Inventory Summary: <span className="ms-3">$200</span>
                </span>
              </div>

              <div className="risk_range">
                <span>Risk</span>
                <img className="range" src={range} alt="" />
              </div>
            </div>
            <div className="tbox_cost">
              <h5 className="fs-2 text-orange text-center">
                VALET <br /> XXX
              </h5>
            </div>
            <div className="tbox_cost">
              <h5 className="fs-2 text-center">
                TOTAL <br /> 52$
              </h5>
            </div>
          </div>
          {/* <IoIosArrowDroprightCircle className="text-white io_arrow" /> */}
          {/* <span className="go">
            Click To <br />
            Go
          </span> */}

          <div className="travel_box_btn travel_btn_img2"></div>
        </div>
        <div className="travel_hero" onClick={history.push("#")}>
          <div className="travel_box">
            <div className="tbox_content">
              <h5>Fly commercial</h5>
              <div className="tbox_subcontent">
                <span>
                  Arrival Time: <span className="ms-5">10 am</span>
                </span>
                <span>
                  Inventory Summary: <span className="ms-3">$200</span>{" "}
                </span>
              </div>

              <div className="risk_range">
                <span>Risk</span>
                <img className="range" src={range} alt="" />
              </div>
            </div>
            <div className="tbox_cost">
              <h5 className="fs-2 text-orange text-center">
                VALET <br /> XXX
              </h5>
            </div>

            <div className="tbox_cost">
              <h5 className="fs-2 text-center">
                TOTAL <br /> 52$
              </h5>
            </div>
          </div>
          {/* <IoIosArrowDroprightCircle className="text-white io_arrow" /> */}
          {/* <span className="go">
            Click To <br />
            Go
          </span> */}
          <div className="travel_box_btn travel_btn_img3"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Travel;
