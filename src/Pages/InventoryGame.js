import React from "react";
import MobileViewTabs from "../Components/MobileViewTabs";
import TransferList from "../Components/TransferList";

const InventoryGame = () => {
  return (
    <React.Fragment>
      <MobileViewTabs />
      <div className="t_list">
        <TransferList />
      </div>
    </React.Fragment>
  );
};

export default InventoryGame;
