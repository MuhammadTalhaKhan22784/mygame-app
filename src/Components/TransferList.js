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
