import React from "react";
import UserListItems from "./UserListItems";

const UserListBox = () => {
  return (
    <React.Fragment>
      <div className="main_box">
        <div className="mu_box">
          <div className="mu_top">
            <h2 className="text-center">Personal</h2>
          </div>
          <div className="users_list">
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
          </div>
        </div>
        {/* <div className="main_details_box">
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
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default UserListBox;
