import React from "react";
import { useHistory } from "react-router";

const UserListItems = () => {
  const history = useHistory()
  return (
    <React.Fragment>
      <div className="user_list_item" onClick={()=>{history.push("#")}}>
        <h6>Lorem Rain</h6>
        <h6>20</h6>
      </div>
    </React.Fragment>
  );
};

export default UserListItems;
