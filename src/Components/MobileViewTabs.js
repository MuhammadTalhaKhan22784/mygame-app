import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import UserListBox from "./UserListBox";
import DumpAllBtn from "../assets/mobiledumpall.png";
import { Link } from "react-router-dom";

const MobileViewTabs = () => {
  return (
    <React.Fragment>
      <div className="main_tabs">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-lista-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-lista"
              type="button"
              role="tab"
              aria-controls="pills-lista"
              aria-selected="true"
            >
              Personal Inventory
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-listb-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-listb"
              type="button"
              role="tab"
              aria-controls="pills-listb"
              aria-selected="false"
            >
              City Inventory
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-lista"
            role="tabpanel"
            aria-labelledby="pills-lista-tab"
          >
            <div className="users_main">
              <UserListBox />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-listb"
            role="tabpanel"
            aria-labelledby="pills-listb-tab"
          >
            <div className="users_main">
              <UserListBox />
            </div>
          </div>
        </div>
        <div className="main_details">
          <h2>Items Details</h2>
          <div className="main_details_box">
            <div className="user_pic">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="user_info d-flex flex-column">
              <h2 className="fs-6">Item Name :Lorem Rain</h2>
              <h2 className="fs-6">Cost: 20$</h2>
            </div>
            <div className="mbv-arrow">
              <Link className="text-decoration-none" to="#">
                <button>MOVE</button>
              </Link>
            </div>
          </div>
          {/* <div className="dump_btn_box">
            <button type="button" class="btn btn-dark">
              Dump All
            </button>
          </div> */}
          <div className="arrow_icon">
            <div className="dump_btn_box">
              <button type="button" class="btn btn-dark">
                <img src={DumpAllBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileViewTabs;
