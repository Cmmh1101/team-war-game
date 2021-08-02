import React from "react";
import { Table } from "reactstrap";

export default function Scoreboard(props) {
  return (
    <div className="container">
      <div className="row scoreboard mx-auto">
        <div className="col text-center">
          {/* <h1>Scoreboard</h1> */}
          {/* side to side scoreboard */}
          <div className="col d-flex justify-content-between mt-5 text-white">
            <div className="col-4">
              <div className="font-weight-bold">Player 1</div>
              <div className="">
                <Table className="bg-white">
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
              <div className="font-weight-bold">Player 2</div>
              <div className="">
                <Table className="bg-white">
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
