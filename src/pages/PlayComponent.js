import React from "react";
import { Table } from "reactstrap";

function Play() {
  return (
    <React.Fragment>
      <div className="Container">
        <div className="row scoreboard mx-auto">
          <div className="col text-center">
            <h1>Scoreboard</h1>
            {/* side to side scoreboard */}
            <div className="col d-flex justify-content-between mb-5">
              <div className="col-4">
                <div className="">Player 1</div>
                <div className="">
                  <Table>
                    <thead>
                      <tr>
                        <th>Score</th>
                        <th>Cards Left</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-4">
                <div className="">Player 2</div>
                <div className="">
                  <Table>
                    <thead>
                      <tr>
                        <th>Score</th>
                        <th>Cards Left</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </React.Fragment>
  );
}

export default Play;
