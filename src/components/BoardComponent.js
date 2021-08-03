import React from "react";
import { Fade, Transform } from "react-animation-components";

function Cards(props) {
  return (
    <>
      <div className="played-cards played-card_1">
        <img src={props.p1Path} alt="played card 1" />
      </div>
      <div className="played-cards played-card_2">
        <img id="p2played" src={props.p2Path} alt="played card 2" />
      </div>
    </>
  );
}

function Board(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 board-area">
          <div className="col-md-2 text-left d-flex justify-content-between text-white">
            <span>Player One</span>{" "}
            <span className="d-md-none">Player Two</span>
          </div>
          <div className="col-md-8">
            {/* Board */}
            <div className="board text-center">
              {/* face up played cards */}
              <div className="play-area">
                {props.itsWar ? (
                  <h1 className="war-sign text-dark bg-warning ">WAR</h1>
                ) : null}
                {props.showCards ? (
                  <Fade in>
                    <Transform enterTransform="translate(0, 250px)" in>
                      <Cards p1Path={props.p1Path} p2Path={props.p2Path} />
                    </Transform>
                  </Fade>
                ) : null}
                {/* <Fade in>
                  <Transform enterTransform="translate(0, 250px)" in>
                    <div className="war-down-cards">
                      <img className=""
                        src="../cards/backcard.jpg"
                        alt="four cards facing down"
                      />
                      <img
                        src="../cards/backcard.jpg"
                        alt="four cards facing down"
                      />
                      <img
                        src="../cards/backcard.jpg"
                        alt="four cards facing down"
                      />
                      <img
                        src="../cards/backcard.jpg"
                        alt="four cards facing down"
                      />
                    </div>
                  </Transform>
                </Fade> */}
              </div>
              {/* Face Down deck cards */}
              <div className="cards card-down_1"></div>
              <div className="cards card-down_2"></div>
            </div>
          </div>
          <div className="col-md-2 text-right">
            <span className="d-none d-md-block text-white">Player Two</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
