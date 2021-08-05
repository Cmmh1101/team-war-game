import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Homepage from "../pages/HomepageComponent";
import Play from "../pages/PlayComponent";
import Rules from "../pages/RulesComponent";
import ContactUs from "../pages/ContactUsComponent";
import Navigation from "./NavigationComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Main() {
  return (
    <React.Fragment>
      <Navigation />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch>
            <Route path="/homepage" component={Homepage} />
            <Route exact path="/play" component={Play} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/contactus" component={ContactUs} />
            <Redirect to="/homepage" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
}

export default withRouter(Main);
