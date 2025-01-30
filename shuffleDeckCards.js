// program to shuffle the deck of cards

// declare card elements 
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

const deck = [];

//created deck of cards
for (i=0; i<suits.length; i++) {
    for (j=0; j<values.length; j++) {
        let card = { Value: values[j], Suit: suits[i]};
        deck.push(card);
    }
}
function displayCards() {
    for (i = 0; i < 5; i ++) {
        console.log(`${deck[i].Value} of ${deck[i].Suit}`);
        }
}
function shuffleCards() {
    for (i = deck.length - 1; i > 0; i--) {
        let j = Math.floor((Math.random() * i));
        
        // swap values
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;

    }
}
console.log("------------------Before shuffling-------------");
displayCards();

console.log("-----------------After shuffling-------------");
// calling shuffling card function 
shuffleCards();
// calling displayCards function after shuffling
displayCards();


/*
------------------Before shuffling-------------
Ace of Spades
2 of Spades
3 of Spades
4 of Spades
5 of Spades
-----------------After shuffling-------------
5 of Club
8 of Spades
King of Club
9 of Heart
2 of Spades
*/