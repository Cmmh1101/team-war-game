import React, { Component } from "react";
import Scoreboard from "../components/ScoreboardComponent";
import Board from "../components/BoardComponent";
import Controls from "../components/ControlsComponent";

class Play extends Component {
  constructor(props) {
    super(props);

    this.playCard = this.playCard.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.state = {
      playerDeck: {
        playerOne: [],
        playerTwo: []
      },
      score : {
        playerOne: 10,
        playerTwo: 0
      },
      currentCard: {
        playerOne: [],
        playerTwo: []
      },
      cardImgPath: {
        playerOne: '',
        playerTwo: ''
      },
      buttText : 'Shuffle the cards',
      playing: false,
      showCards: false,
      showButton: false,
    };
  }

  
   

 
  buttonHandler(){
    this.setState({
      buttText: 'Reset the game',
      playing: true,
      showButton : true,
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
    if ((i + 2)%2 === 0) {
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

  playCard(){
    this.setState({
      showCards : true
    });

    let p1CurrentCard = this.state.playerDeck.playerOne.shift();
    let p2CurrentCard = this.state.playerDeck.playerTwo.shift();
    //set current card as the first item in the playerDeck array for each player
    let p1CurrentVal = p1CurrentCard.slice(1);
    let p2CurrentVal = p2CurrentCard.slice(1);
    //sets the current value as the last character in the current card. returns STRING
    console.log(p1CurrentCard, p2CurrentCard, p1CurrentVal, p2CurrentVal);
    
    const checkNum = (val) => {
      if (isNaN(Number(val)) ) {
        switch(val) {
          case 'J': return 11;
          case 'Q': return 12;
          case 'K': return 13;
          case 'A': return 14;
          default : console.log('Value error');
        }
      } else {
        return parseInt(val)
      }}
      // console.log(checkNum('6')); 
      //checks if current value is Nan. If it is converts the letter character to the appropriate number value, if not converts the value string to a number

      const compareVal = (v1, v2) => {
        if (v1 === v2) {
          console.log('war');
        } else if (v1 > v2) {
          console.log('p1 wins');
        } else {console.log('p2wins');}
      }
      //accepts 2 numbers and compares. 
      //NEED TO UPDATE LOGIC TO PUSH THE CARDS TO THE APPROPRIATE PLAYER

      compareVal(checkNum(p1CurrentVal), checkNum(p2CurrentVal));

      const updatePath = (card) => {
        let path = `../cards/`;
        path += `${card[1]}_of_`
        switch(card[0]) {
          case 'C': path += 'clubs';
          break;
          case 'D': path += 'diamonds';
          break;
          case 'H': path += 'hearts';
          break;
          case 'S': path += 'spades';
          break;
          default: console.log('Suit error');
        }
        path += '.png'
        console.log(path, typeof path); 
        return path;
      }
      
      this.setState({
        cardImgPath: {
        playerOne: updatePath(p1CurrentCard),
        playerTwo: updatePath(p2CurrentCard)
      }
      })
      
  }

  
  render() {
    return (
    <React.Fragment>
      <div className="Container">
        <Scoreboard p1wins={this.state.score.playerOne} p2wins={this.state.score.playerTwo} p1hand={this.state.playerDeck.playerOne.length} p2hand={this.state.playerDeck.playerTwo.length} />
        <Controls shuffle={this.shuffleDeck} buttText={this.state.buttText} playCard={this.playCard} showButton={this.state.showButton}/>
        <Board showCards={this.state.showCards} p1Path={this.state.cardImgPath.playerOne} p2Path={this.state.cardImgPath.playerTwo}/>
      </div>
    </React.Fragment>
  );
  
  
  }
}

export default Play;
//moved presentational components for the Scoreboard and game board(Board) into separate components