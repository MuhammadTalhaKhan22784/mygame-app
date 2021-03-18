import React from "react";
import "./App.css";
import MobileViewTabs from "./Components/MobileViewTabs";
import TransferList from "./Components/TransferList";

function App() {
  return (
    <React.Fragment>
      <MobileViewTabs />
      <div className="t_list">
        <TransferList />
      </div>
    </React.Fragment>
  );
}

export default App;
