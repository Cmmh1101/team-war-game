import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./HomepageComponent";
import Play from "./PlayComponent";
import Navigation from "./NavigationComponent";

function Main() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/homepage" component={Homepage} />
        <Route exact path="/play" component={Play} />
        <Redirect to="/homepage" />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
