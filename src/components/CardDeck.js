import React from "react";

function CardDeck() {
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
  return <> {deck} </>;
}

CardDeck();

export default CardDeck;

//We will need to update the CardDeck to an ARRAY of OBJECTS
//Each OBJECT contains a Suit, a Value, a Key, and an image src(OR dynamically generate image paths??)
//We need the OBJECT Value properties so we can compare whether the PlayerOne card is equal to, greater or less than the PlayerTwo card
