import React from "react";
import { Table } from "reactstrap";

export default function Scoreboard(props) {
  return (
    <div className="container">
      <div className="row scoreboard mx-auto">
        {/* side to side scoreboard */}
        <div className="col-12 d-flex justify-content-between mt-5 text-white">
          <div className="col-6 col-md-4 px-0">
            <div className="font-weight-bold text-center">Player 1</div>
            <div className="">
              <Table className="bg-white border border-2 border-start text-center">
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
          <div className="col-6 col-md-4 px-0">
            <div className="font-weight-bold text-center">Player 2</div>
            <div className="">
              <Table className="bg-white border border-2 border-end text-center">
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
  );
}
