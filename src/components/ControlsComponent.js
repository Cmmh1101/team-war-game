import React from "react";

export default function Controls(props) {
  function playCards() {
    props.warCards();
    props.playCard();
  }

  return (
    <div className="container">
      <div className="row">
        <div
          id="controlla"
          className="col-12 col-md-10 d-flex justify-content-center mx-auto mb-3
      "
        >
          {props.showButton ? (
            <button
              id="play"
              className="col-3 m-1 buttons text-center"
              onClick={playCards}
            >
              Play
            </button>
          ) : null}

          <button
            id="reset"
            className="col-3 m-1 buttons text-center"
            onClick={props.shuffle}
          >
            {props.buttText}
          </button>
        </div>
      </div>
    </div>
  );
}
