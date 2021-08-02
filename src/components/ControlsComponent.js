import React from "react";

export default function Controls(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          id="controlla"
          className="col d-flex justify-content-center mx-auto mb-3
      "
        >
          {props.showButton ? (
            <button
              id="play"
              className="col-3 m-1 buttons"
              onClick={props.playCard}
            >
              Play
            </button>
          ) : null}

          <button
            id="reset"
            className="col-3 m-1 buttons"
            onClick={props.shuffle}
          >
            {props.buttText}
          </button>
        </div>
      </div>
    </div>
  );
}
