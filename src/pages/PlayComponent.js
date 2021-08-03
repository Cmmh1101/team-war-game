import React, { Component } from "react";
import Scoreboard from "../components/ScoreboardComponent";
import Board from "../components/BoardComponent";
import Controls from "../components/ControlsComponent";

class Play extends Component {
  constructor(props) {
    super(props);

    this.playCard = this.playCard.bind(this);
    this.playButtonHandler = this.playButtonHandler.bind(this);
    this.resetButtonHandler = this.resetButtonHandler.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.state = {
      playerDeck: {
        playerOne: [],
        playerTwo: [],
      },
      score: {
        playerOne: 0,
        playerTwo: 0,
      },
      currentCard: {
        playerOne: [],
        playerTwo: [],
      },
      cardImgPath: {
        playerOne: "",
        playerTwo: "",
      },
      cardsInLimbo: [],
      buttText: "Shuffle",
      playing: false,
      showCards: false,
      showButton: false,
      itsWar: false,
      warCards: false,
    };
  }

  playButtonHandler() {
    if (this.state.cardsInLimbo.length !== -1) {
      if (this.state.warCards) {
        return null;
      } else {
        this.setState({
          warCards: true,
        });
      }
    } else {
      this.setState({
        warCards: false,
      });
    }
  }
  resetButtonHandler() {
    if (this.state.playing && this.state.showButton) {
      this.setState({
        buttText: "Shuffle",
        playing: false,
        showButton: false,
        showCards: false,
      });
    } else {
      this.setState({
        buttText: "Restart",
        playing: true,
        showButton: true,
      });
    }
  }

  shuffleDeck() {
    const deck = [];
    const suits = ["C", "D", "H", "S"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    for (let suitCount = 0; suitCount < 4; suitCount++) {
      // console.log(suits[suitCount]);
      for (let valCount = 0; valCount < 13; valCount++) {
        deck.push(`${suits[suitCount]}${values[valCount]}`);
      }
    }
    //shuffle the deck
    for (let i = 0; i < 52; i++) {
      let card = deck[i];
      let randomIndex = Math.floor(Math.random() * 52);
      deck[i] = deck[randomIndex];
      deck[randomIndex] = card;
    }
    //deal the deck
    let p1Cards = [];
    let p2Cards = [];
    //create 2 arrays into which we are going to split the shuffled cards based on even/odd position;
    for (let i = 0; i < deck.length; i++) {
      if ((i + 2) % 2 === 0) {
        p1Cards.push(deck[i]);
      } else {
        p2Cards.push(deck[i]);
      }
    }
    this.setState({
      playerDeck: { playerOne: p1Cards, playerTwo: p2Cards },
    });
    this.resetButtonHandler();
  }

  playCard() {
    this.setState({
      showCards: true,
    });
    //shows the first draw

    //NEED TO: update win count, re-shuffle and deal, make sure state is updated correctly(reset buttons, cards)

    let p1CurrentCard = "";
    let p2CurrentCard = "";
    let p1Arr = [...this.state.playerDeck.playerOne];
    let p2Arr = [...this.state.playerDeck.playerTwo];
    let p1Score = this.state.score.playerOne;
    let p2Score = this.state.score.playerTwo;
    // console.log(p1Score, typeof p2Score, "p1Score");

    //Copy the player hands and remove the current card AVOID MUTATING STATE DIRECTLY
    const pullCard = () => {
      // this.setState({
      //   itsWar: false,
      // });
      //make a SHALLOW COPY of the playerDeck ARRAYS from STATE
      // console.log('p1Arr' + p1Arr);

      p1CurrentCard = p1Arr.shift();
      p2CurrentCard = p2Arr.shift();
      //set current card as the first item in the playerDeck array for each player
      this.setState({
        playerDeck: { playerOne: p1Arr, playerTwo: p2Arr },
      });
      //update the playerDeck in the STATE - 1 card
    };
    pullCard();

    let p1CurrentVal = p1CurrentCard.substring(1);
    let p2CurrentVal = p2CurrentCard.substring(1);
    //sets the current value as the last character in the current card. returns STRING
    // console.log(`p1card: ${p1CurrentCard}, p1val:${p1CurrentVal}
    //  p2card: ${p2CurrentCard}, p2val:${p2CurrentVal}`);

    const checkNum = (val) => {
      if (isNaN(Number(val))) {
        switch (val) {
          case "J":
            return 11;
          case "Q":
            return 12;
          case "K":
            return 13;
          case "A":
            return 14;
          default:
            console.log("Value error");
        }
      } else {
        return parseInt(val);
      }
    };

    //checks if current value is Nan. If it is converts the letter character to the appropriate number value, if not converts the value string to a number

    const updatePath = (card, val) => {
      let path = `../cards/`;
      path += `${val}_of_`;
      switch (card[0]) {
        case "C":
          path += "clubs";
          break;
        case "D":
          path += "diamonds";
          break;
        case "H":
          path += "hearts";
          break;
        case "S":
          path += "spades";
          break;
        default:
          console.log("Suit error");
      }
      path += ".png";
      // console.log(path, typeof path);
      return path;
    };

    this.setState({
      cardImgPath: {
        playerOne: updatePath(p1CurrentCard, p1CurrentVal),
        playerTwo: updatePath(p2CurrentCard, p2CurrentVal),
      },
    });

    //accepts 2 numbers and compares the values.
    const compareVal = (v1, v2) => {
      let cardsInPlay = [p1CurrentCard, p2CurrentCard];
      let winningsArr = [];

      console.log("inPlay", cardsInPlay);
      if (v1 === v2) {
        this.setState({
          itsWar: true,
          warCards: true,
        });
        console.log("war");
        //this win condition is if both players have less than 5 cards and there is WAR. player with more cards wins, draw if players have same number of cards...EDGE CASE
        if (p1Arr.length < 5 && p2Arr.length < 5) {
          if (p1Arr.length === p2Arr.length) {
            alert(
              "Both players have lost all their cards. The game is a draw."
            );
          } else if (p1Arr.length > p2Arr.length) {
            alert(
              "Player 1 has won the game in a WAR. Player 2 did not have enough cards"
            );
            p1Score++;
            this.setState({
              score: { playerOne: p1Score, playerTwo: p2Score },
            });
          } else {
            alert(
              "Player 2 has won the game in a WAR. Player 1 did not have enough cards"
            );
            p2Score++;
            this.setState({
              score: { playerOne: p1Score, playerTwo: p2Score },
            });
          }
          //this win condition is if a player doesn't have enough cards to stake a WAR at the end of the game. That player loses
        } else if (p1Arr.length < 5 || p2Arr.length < 5) {
          if (p1Arr.length < 5) {
            alert(
              "Player 2 has won the game in a WAR. Player 1 did not have enough cards"
            );
            p2Score++;
            this.setState({
              score: { playerOne: p1Score, playerTwo: p2Score },
            });
          } else {
            alert(
              "Player 1 has won the game in a WAR. Player 2 did not have enough cards"
            );
            p1Score++;
            this.setState({
              score: { playerOne: p1Score, playerTwo: p2Score },
            });
          }

          this.resetButtonHandler();
        } else {
          cardsInPlay = cardsInPlay.concat(
            p1Arr.splice(0, 4),
            p2Arr.splice(0, 4)
          );
          console.log(cardsInPlay);
          this.setState({
            cardsInLimbo: cardsInPlay,
          });
          cardsInPlay = [];
        }
      } else if (v1 > v2) {
        //checks if the are 'cardsInLimbo' in STATE from a pervious WAR and adds to 'winningsArr' clears 'cardsInLimbo';
        if (this.state.cardsInLimbo.length !== -1) {
          winningsArr = [...this.state.cardsInLimbo];
          this.setState({
            cardsInLimbo: [],
            itsWar: false,
          });
          //adds 'cardsInPlay' to 'p1Arr' if Player1 wins

          p1Arr = p1Arr.concat(cardsInPlay, winningsArr);

          console.log(
            "p1Card#",
            p1Arr.length,
            "p2Card#",
            p2Arr.length,
            cardsInPlay
          );
          //checks win condition for p1

          if (p2Arr.length === 0) {
            alert("Player One is the winner");
            p1Score++;
            this.setState({
              score: { playerOne: p1Score, playerTwo: p2Score },
            });
            this.resetButtonHandler();
            this.playButtonHandler();
          }
        }

        // console.log('p1 wins', p1Arr[p1Arr.length-2], p1Arr[p1Arr.length-1], 'p1#', p1Arr.length, 'p2#', p2Arr.length);
      } else {
        //checks if the are 'cardsInLimbo' in STATE from a pervious WAR and adds to 'winningsArr' clears 'cardsInLimbo';
        if (this.state.cardsInLimbo.length !== -1) {
          winningsArr = [...this.state.cardsInLimbo];
          this.setState({
            cardsInLimbo: [],
            itsWar: false,
          });
          //adds 'cardsInPlay' to 'p2Arr' if Player2 wins
          p2Arr = p2Arr.concat(cardsInPlay, winningsArr);

          console.log(
            "p1Card#",
            p1Arr.length,
            "p2Card#",
            p2Arr.length,
            cardsInPlay
          );
          //checks win condition for p2
          if (p1Arr.length === 0) {
            alert("Player Two is the winner");
            p2Score++;
            this.setState({
              score: { playerOne: p1Score, playerTwo: p2Score },
            });
            this.resetButtonHandler();
            this.playButtonHandler();
          }
        }

        // console.log('p2wins', p2Arr[p2Arr.length-2], p2Arr[p2Arr.length-1], 'p1#', p1Arr.length, 'p2#', p2Arr.length);
      }

      this.setState({
        playerDeck: { playerOne: p1Arr, playerTwo: p2Arr },
      });
    };
    compareVal(checkNum(p1CurrentVal), checkNum(p2CurrentVal));
  }

  render() {
    return (
      <div className="bg-dark play-layout">
        <Scoreboard
          p1wins={this.state.score.playerOne}
          p2wins={this.state.score.playerTwo}
          p1hand={this.state.playerDeck.playerOne.length}
          p2hand={this.state.playerDeck.playerTwo.length}
        />
        <Controls
          shuffle={this.shuffleDeck}
          buttText={this.state.buttText}
          playCard={this.playCard}
          showButton={this.state.showButton}
          warCards={this.playButtonHandler}
        />
        <Board
          showCards={this.state.showCards}
          p1Path={this.state.cardImgPath.playerOne}
          p2Path={this.state.cardImgPath.playerTwo}
          itsWar={this.state.itsWar}
          warCards={this.state.warCards}
          cardsInLimbo={this.state.cardsInLimbo.length !== -1 ? true : false}
        />
      </div>
    );
  }
}

export default Play;
//moved presentational components for the Scoreboard and game board(Board) into separate components
