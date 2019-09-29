let player1 = 0;
let player2 = 0;

let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let suit = ["hearts", "clubs", "diamonds", "spades"];
let cardColors = ["red", "black"];

function randomCard1() {

let rando = cards[Math.floor(Math.random() * cards.length)];
player1 = rando;
if (rando == 1) {
rando = "A";
} else if (rando == 11) {
rando = "J";
} else if (rando == 12) {
rando = "Q";
} else if (rando == 13) {
rando = "K";
}

let randomSuit = Math.floor (Math.random() * suit.length);
if (randomSuit == 0) {
randomSuit = "fa-heart"
} else if (randomSuit == 1) {
randomSuit = "fa-times"
} else if (randomSuit == 2) {
randomSuit = "fa-diamond"
} else if (randomSuit == 3) {
randomSuit = "fa-square"
}

console.log(randomSuit);

let randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];


document.querySelector("#player1").style.color = randomColor;

if (randomColor == "red") {
    document.querySelector('#player1').style.backgroundColor = "#000000";
} else {
    document.querySelector('#player1').style.backgroundColor = "#ff0000";
}


document.querySelector('#player1').innerHTML = `<i class="fa ${randomSuit} fa-5x" aria-hidden="true"></i> <p class="cardValue">${rando}</p> <i class="fa ${randomSuit} fa-5x align-text-bottom suitRotate" aria-hidden="true"></i>`;

checkWinner();
}

function randomCard2() {

let rando = cards[Math.floor(Math.random() * cards.length)];
player2 = rando;
if (rando == 1) {
rando = "A";
} else if (rando == 11) {
rando = "J";
} else if (rando == 12) {
rando = "Q";
} else if (rando == 13) {
rando = "K";
}

let randomSuit = Math.floor (Math.random() * suit.length);
if (randomSuit == 0) {
randomSuit = "fa-heart"
} else if (randomSuit == 1) {
randomSuit = "fa-times"
} else if (randomSuit == 2) {
randomSuit = "fa-diamond"
} else if (randomSuit == 3) {
randomSuit = "fa-square"
}

console.log(randomSuit);

let randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];


document.querySelector("#player2").style.color = randomColor;

if (randomColor == "red") {
document.querySelector('#player2').style.backgroundColor = "#000000";
} else {
document.querySelector('#player2').style.backgroundColor = "#ff0000";
}

document.querySelector('#player2').innerHTML = `<i class="fa ${randomSuit} fa-5x" aria-hidden="true"></i> <p class="cardValue">${rando}</p> <i class="fa ${randomSuit} fa-5x align-text-bottom suitRotate" aria-hidden="true"></i>`;
checkWinner();
}

function checkWinner() {

let resetButton = `<button class="btn-danger btn-lg" onclick="reset()">Reset</button>`

if (player1 > 0 && player2 > 0) {


let winningPlayer;

if (player1 > player2  ) {
    
    document.querySelector('#winner').innerHTML = `P2 lost :(`
    document.querySelector('#reset').innerHTML = resetButton
} else {
    document.querySelector('#winner').innerHTML = `P2 Won!`
    document.querySelector('#reset').innerHTML = resetButton
    
}
}

}

function reset() {
player1 = 0;
player2 = 0;
document.querySelector('#player1').innerHTML = ``;
document.querySelector('#player2').innerHTML = ``;
document.querySelector('#winner').innerHTML = ``
document.querySelector('#reset').innerHTML = ``
document.querySelector('#player1').style.backgroundColor = "";
document.querySelector('#player2').style.backgroundColor = "";

}