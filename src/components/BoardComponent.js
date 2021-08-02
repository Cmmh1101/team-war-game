import React from "react";

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
          <div className="col-md-2 text-center">
            <h1>Player One</h1>
          </div>
          <div className="col-md-8">
            {/* Board */}
            <div className="bg-dark board text-center">
              {/* face up played cards */}
              <div className="play-area">
                <h1 className="war-sign text-white bg-warning">WAR</h1>
                {props.showCards ? (
                  <Cards p1Path={props.p1Path} p2Path={props.p2Path} />
                ) : null}
              </div>
              {/* Face Down deck cards */}
              <div className="cards card-down_1"></div>
              <div className="cards card-down_2"></div>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <h1>Player Two</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
