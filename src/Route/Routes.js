import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gang from "../Pages/Gang";
import GangProperties from "../Pages/GangProperties";
import Home from "../Pages/Home";
import InventoryGame from "../Pages/InventoryGame";
import LibertyPreserve from "../Pages/LibertyPreserve";
import Overview from "../Pages/Overview";
import Properties from "../Pages/Properties";
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
          <Route exact path="/properties">
            <Properties />
          </Route>
          <Route exact path="/gang">
            <Gang />
          </Route>
          <Route exact path="/gang-overview">
            <Overview />
          </Route>
          <Route exact path="/gang-properties">
            <GangProperties />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
