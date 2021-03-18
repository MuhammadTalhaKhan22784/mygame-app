// import { formatMs } from "@material-ui/core";
import React from "react";
import "./styles/TransferList.css";
import UserListItems from "./UserListItems";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
const TransferList = () => {
  return (
    <React.Fragment>
      <div className="user_wrapper">
        <div className="main_users_list">
          <div className="main_box">
            <div className="mu_box">
              <div>
                <h2 className="text-center">List A</h2>
              </div>
              <div className="users_list">
                <UserListItems />
                <UserListItems />
                <UserListItems />
                <UserListItems />
                <UserListItems />
              </div>
            </div>
            <div className="main_details_box">
              <div>
                <img
                  src="https://wakeupweekend.ir/wp-content/uploads/2015/11/user-male-shape-in-a-circle-ios-7-interface-symbol_318-35357.jpg"
                  alt=""
                />
              </div>
              <div className="d-flex flex-column w-100">
                <h2 className="fs-6">Item Name :Lorem Rain</h2>
                <h2 className="fs-6">Cost: 20$</h2>
                <h2 className="fs-6">Quantity:</h2>
              </div>
            </div>
          </div>
          <div className="arrow_icon">
            <HiOutlineChevronDoubleLeft />
            <HiOutlineChevronDoubleRight />
          </div>
          <div className="main_box">
            <div className="mu_box">
              <div>
                <h2 className="text-center">List A</h2>
              </div>
              <div className="users_list">
                <UserListItems />
                <UserListItems />
                <UserListItems />
                <UserListItems />
                <UserListItems />
              </div>
            </div>
            <div className="main_details_box">
              <div>
                <img
                  src="https://wakeupweekend.ir/wp-content/uploads/2015/11/user-male-shape-in-a-circle-ios-7-interface-symbol_318-35357.jpg"
                  alt=""
                />
              </div>
              <div className="d-flex flex-column w-100">
                <h2 className="fs-6">Item Name :Lorem Rain</h2>
                <h2 className="fs-6">Cost: 20$</h2>
                <h2 className="fs-6">Quantity:</h2>
              </div>
            </div>
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
