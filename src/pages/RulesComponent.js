import React from "react";
import { Media } from "reactstrap";

// import { FadeTransform, Fade, Stagger } from "react-animation-components";

function Rules() {
  return (
    <div className="main-section">
      <div className="container text-white my-5">
        <div className="row">
          <div className="col">
            <h1 className="text-center titles">Quadruple War Game Rules </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <section>
              <p>
                <strong>Quadruple War</strong> is a variant of the centuries old
                card game <strong> War</strong> played with 2 players.
              </p>
              <strong>To win, you must capture all of the cards!</strong>
            </section>
            <section>
              <h3 className="my-2 titles">How To Play</h3>
            </section>
            <hr />
            <Media>
              <Media left className="my-auto">
                <Media
                  object
                  className="rules-card mr-4 d-none d-block"
                  src="../cards/backcard.jpg"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>
                  <strong>Set up</strong>
                </Media>
                <p>
                  We take a standard 52 card deck of playing cards, shuffle, and
                  deal into 2 player decks of 26 cards. Cards are placed
                  face-down in front of each player.
                </p>
              </Media>
            </Media>
            <hr />
            <Media>
              <Media left className="my-auto">
                <Media
                  object
                  className="rules-card mr-4"
                  src="../cards/backcard.jpg"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>
                  <strong>Game Play</strong>
                </Media>
                <p>
                  Each player takes the top card of their hand and flips it
                  face-up. The player with the highest value card, wins the
                  hand. The card values are in numerical order from 2 to 14.
                  Number cards reflect their values(2-10), Jacks are worth 11,
                  Queens 12, Kings 13, and Aces high at 14. The winning player
                  takes both cards and places them at the bottom of their player
                  deck.
                </p>
              </Media>
            </Media>
            <hr />
            <Media>
              <Media left className="my-auto">
                <Media
                  object
                  className="rules-card mr-4"
                  src="../cards/backcard.jpg"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>
                  <strong>War</strong>
                </Media>
                <p>
                  In the event both cards have equal value, you must go to WAR.
                  In Quadruple War, each player stakes 4 cards face-down from
                  their hand and turns the fifth card face-up. The highest value
                  card is the winner of the WAR and places all the cards won at
                  the bottom of their player deck.
                </p>
              </Media>
            </Media>
            <hr />
            <Media>
              <Media left className="my-auto">
                <Media
                  object
                  className="rules-card mr-4"
                  src="../cards/backcard.jpg"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>
                  <strong>If you can't go to WAR</strong>
                </Media>
                <p>
                  If you have less than 5 cards in your player deck, you don't
                  have enough cards to stake the WAR and turn over a card. I'm
                  sorry my friend, your final battle has been fought. You lose!
                </p>
              </Media>
            </Media>
            <hr />
            <Media>
              <Media left className="my-auto">
                <Media
                  object
                  className="rules-card mr-4"
                  src="../cards/backcard.jpg"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>
                  <strong>
                    If at any point you have no cards to play in your player
                    deck, You Lose!
                  </strong>
                </Media>
                <p>You have been bested by a worthy opponent!</p>
              </Media>
            </Media>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
