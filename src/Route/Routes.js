import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import InventoryGame from "../Pages/InventoryGame";
import LibertyPreserve from "../Pages/LibertyPreserve";
import Travel from "../Pages/Travel";

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/liberty_preserve">
            <LibertyPreserve />
          </Route>
          <Route exact path="/my_game">
            <InventoryGame />
          </Route>
          <Route exact path="/travel">
            <Travel />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
