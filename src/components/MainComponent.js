import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../pages/HomepageComponent";
import Play from "../pages/PlayComponent";
import Rules from "../pages/RulesComponent";
import ContactUs from "../pages/ContactUsComponent";
import Navigation from "./NavigationComponent";

function Main() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/contactus" component={ContactUs} />
        <Redirect to="/homepage" />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
