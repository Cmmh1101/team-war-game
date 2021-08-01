import React, { Component } from "react";
import Scoreboard from "../components/ScoreboardComponent";
import Board from "../components/BoardComponent";
import Controls from "../components/ControlsComponent";

class Play extends Component {
  constructor(props) {
    super(props);

    this.buttonHandler =this.buttonHandler.bind(this);
    this.shuffleDeck =this.shuffleDeck.bind(this);
    this.state = {
      playerDeck: {
        playerOne: [],
        playerTwo: []
      },
      score : {
        playerOne: 10,
        playerTwo: 0
      },
      buttText : 'Shuffle the cards',
      playing: false
    };
  }

  buttonHandler(){
    if (!this.state.playing){
      let newButton = document.createElement('button');
      newButton.innerText = 'WAR';
      newButton.className = 'col-2 m-1';
      // newButton.onClick = this.playCard();
      document.getElementById('controlla').prepend(newButton);
    }
    
    this.setState({
      buttText: 'Reset the game',
      playing: true
    })
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
    if ((i + 2)%2 == 0) {
      p1Cards.push(deck[i])
    } else {
      p2Cards.push(deck[i])
    }
  }
  this.setState({
    playerDeck: {playerOne: p1Cards, playerTwo: p2Cards},
  })
  this.buttonHandler();
  }

 
  
  render() {
    return (
    <React.Fragment>
      <div className="Container">
        <Scoreboard p1wins={this.state.score.playerOne} p2wins={this.state.score.playerTwo} p1hand={this.state.playerDeck.playerOne.length} p2hand={this.state.playerDeck.playerTwo.length}/>
        <Controls shuffle={this.shuffleDeck} buttText={this.state.buttText}/>
        <Board />
      </div>
    </React.Fragment>
  );
  
  
  }
}

export default Play;
//moved presentational components for the Scoreboard and game board(Board) into separate components