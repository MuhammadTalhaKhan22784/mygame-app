import React from "react";
import "./style/Travel.css";
const Travel = () => {
  return (
    <React.Fragment>
      <div className="travel_nav">
        <div className="tr_text">
          <h2>TRAVEL</h2>
        </div>
        <div className="tr_dropdown">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              DROPDOWN CITY LIST
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
          <div className="travel_hero">
            <div className="travel_box">
                <div className="tbox_content">
                    <h5>DETAILS</h5>
                </div>
                <div className="tbox_cost">
                    <h5>COST</h5>
                </div>
            </div>
            <div className="travel_box_btn">
                <h5>GO</h5>
            </div>
          </div>
          <div className="travel_hero">
            <div className="travel_box">
                <div className="tbox_content">
                    <h5>DETAILS</h5>
                </div>
                <div className="tbox_cost">
                    <h5>COST</h5>
                </div>
            </div>
            <div className="travel_box_btn">
                <h5>GO</h5>
            </div>
          </div>
          <div className="travel_hero">
            <div className="travel_box">
                <div className="tbox_content">
                    <h5>DETAILS</h5>
                </div>
                <div className="tbox_cost">
                    <h5>COST</h5>
                </div>
            </div>
            <div className="travel_box_btn">
                <h5>GO</h5>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Travel;
