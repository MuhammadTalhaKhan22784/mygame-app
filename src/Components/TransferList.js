// import { formatMs } from "@material-ui/core";
import React from "react";
import "./styles/TransferList.css";
import UserListItems from "./UserListItems";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import UserListBox from "./UserListBox";
const TransferList = () => {
  return (
    <React.Fragment>
      <div className="user_wrapper">
        <div className="main_users_list">
          <UserListBox />
          <div className="arrow_icon">
            <HiOutlineChevronDoubleLeft />
            <HiOutlineChevronDoubleRight />
          </div>
          <UserListBox />
        </div>
        <div className="main_details_box">
          <div className="user_pic">
            <img
              src="https://wakeupweekend.ir/wp-content/uploads/2015/11/user-male-shape-in-a-circle-ios-7-interface-symbol_318-35357.jpg"
              alt=""
            />
          </div>
          <div className="user_info d-flex flex-column w-100">
            <h2 className="fs-6">Item Name :Lorem Rain</h2>
            <h2 className="fs-6">Cost: 20$</h2>
            <h2 className="fs-6">Quantity: 20</h2>
          </div>
        </div>
        <div className="dump_btn_box">
          <button type="button" class="btn btn-dark">
            Dump all:
          </button>
          <button type="button" class="btn btn-dark">
            [X]
          </button>
          <button type="button" class="btn btn-dark">
            [X]
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransferList;
