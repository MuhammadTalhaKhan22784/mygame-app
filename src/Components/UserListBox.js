import React from "react";
import UserListItems from "./UserListItems";

const UserListBox = (props) => {
  return (
    <React.Fragment>
      <div className="main_box">
        <div className="mu_box">
          <div className="mu_top">
            <h2 className="text-center">{props.name}</h2>
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
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
            <UserListItems />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserListBox;
