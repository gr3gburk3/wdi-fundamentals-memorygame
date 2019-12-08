
function createBoard() {
	for (var i = 0; i < cards.length; i++){var cardElement = document.createElement('img');
cardElement.setAttribute(src = "images/back.png");
cardElement.setAttribute('data-id'; i;};
cardElement.addEventListener('click', flipCard());
appendChild('game-board');}
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds"
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
function checkForMatch() {
	document.getElementsByTagName('a')[0].setAttribute(src = cards[cardImage]); 
	if (cardsInPlay[0] === cardsInPlay[1]) {console.log("You found a match!");
} else {
	console.log("Sorry, try again");
}
}
function flipCard() {
this.getAttribute('data-id'; cardId);
console.log("User flipped" + cards[cardId].rank);
cardsInPlay.push(cards["queen"].rank);
cardsInPlay.push(cards["king"].rank);
console.log(cardImage);
console.log(suit);
checkForMatch();
createBoard();
};



