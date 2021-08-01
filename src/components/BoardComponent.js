import React from "react";

function Board() {
  return (
    <div className="row">
          <div className="col d-flex align-items-center mx-auto">
            <div className="col-2 text-center">
              <h1>Player One</h1>
            </div>
            <div className="col-8">
              {/* Board */}
              <div className="bg-dark board text-center">
                {/* face up played cards */}
                <div className="play-area">
                  <div className="played-cards played-card_1">
                    <img src="../cards/red_joker.png" alt="played card 1" />
                  </div>
                  <div className="played-cards played-card_2">
                    <img src="../cards/7_of_diamonds.png" alt="played card 2" />
                  </div>
                </div>
                {/* Face Down deck cards */}
                <div className="cards card-down_1"></div>
                <div className="cards card-down_2"></div>
              </div>
            </div>
            <div className="col-2 text-center">
              <h1>Player Two</h1>
            </div>
          </div>
        </div>
  );
}

export default Board;
