import React from "react";
import { Table } from "reactstrap";

export default function Scoreboard(props) {
  return (
    <div className="container">
      <div className="row scoreboard mx-auto">
        <div className="col text-center">
          <h1>Scoreboard</h1>
          {/* side to side scoreboard */}
          <div className="col d-flex justify-content-between mb-2">
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
                      <td>{props.p1wins}</td>
                      <td>{props.p1hand}</td>
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
                      <td>{props.p2wins}</td>
                      <td>{props.p2hand}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
