import React from "react";
import Navigation from "./NavigationComponent";
import Hero from "./HeroComponent";
import CardDeck from "./CardDeck";

function Main() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <CardDeck />
    </React.Fragment>
  );
}

export default Main;
