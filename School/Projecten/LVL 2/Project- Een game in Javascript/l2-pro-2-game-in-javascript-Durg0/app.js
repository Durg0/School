let pmoney = 1000; //player money
let totalCount = 0; //cards added up
let playerHand = [];
let dealerHand = []; 

let cards = [
  // Diamonds (Red)
  { text: "A", color: "red",   name: "Ace of Diamonds",   value: 11, isAce: true },
  { text: "B", color: "red",   name: "2 of Diamonds",     value: 2 },
  { text: "C", color: "red",   name: "3 of Diamonds",     value: 3 },
  { text: "D", color: "red",   name: "4 of Diamonds",     value: 4 },
  { text: "E", color: "red",   name: "5 of Diamonds",     value: 5 },
  { text: "F", color: "red",   name: "6 of Diamonds",     value: 6 },
  { text: "G", color: "red",   name: "7 of Diamonds",     value: 7 },
  { text: "H", color: "red",   name: "8 of Diamonds",     value: 8 },
  { text: "I", color: "red",   name: "9 of Diamonds",     value: 9 },
  { text: "J", color: "red",   name: "10 of Diamonds",    value: 10 },
  { text: "K", color: "red",   name: "Jack of Diamonds",  value: 10 },
  { text: "L", color: "red",   name: "Queen of Diamonds", value: 10 },
  { text: "M", color: "red",   name: "King of Diamonds",  value: 10 },

  // Hearts (Red)
  { text: "N", color: "red",   name: "Ace of Hearts",     value: 11, isAce: true },
  { text: "O", color: "red",   name: "2 of Hearts",       value: 2 },
  { text: "P", color: "red",   name: "3 of Hearts",       value: 3 },
  { text: "Q", color: "red",   name: "4 of Hearts",       value: 4 },
  { text: "R", color: "red",   name: "5 of Hearts",       value: 5 },
  { text: "S", color: "red",   name: "6 of Hearts",       value: 6 },
  { text: "T", color: "red",   name: "7 of Hearts",       value: 7 },
  { text: "U", color: "red",   name: "8 of Hearts",       value: 8 },
  { text: "V", color: "red",   name: "9 of Hearts",       value: 9 },
  { text: "W", color: "red",   name: "10 of Hearts",      value: 10 },
  { text: "X", color: "red",   name: "Jack of Hearts",    value: 10 },
  { text: "Y", color: "red",   name: "Queen of Hearts",   value: 10 },
  { text: "Z", color: "red",   name: "King of Hearts",    value: 10 },

  // Spades (Black)
  { text: "a", color: "black", name: "Ace of Spades",     value: 11, isAce: true },
  { text: "b", color: "black", name: "2 of Spades",       value: 2 },
  { text: "c", color: "black", name: "3 of Spades",       value: 3 },
  { text: "d", color: "black", name: "4 of Spades",       value: 4 },
  { text: "e", color: "black", name: "5 of Spades",       value: 5 },
  { text: "f", color: "black", name: "6 of Spades",       value: 6 },
  { text: "g", color: "black", name: "7 of Spades",       value: 7 },
  { text: "h", color: "black", name: "8 of Spades",       value: 8 },
  { text: "i", color: "black", name: "9 of Spades",       value: 9 },
  { text: "j", color: "black", name: "10 of Spades",      value: 10 },
  { text: "k", color: "black", name: "Jack of Spades",    value: 10 },
  { text: "l", color: "black", name: "Queen of Spades",   value: 10 },
  { text: "m", color: "black", name: "King of Spades",    value: 10 },

  // Clovers / Clubs (Black)
  { text: "n", color: "black", name: "Ace of Clovers",    value: 11, isAce: true },
  { text: "o", color: "black", name: "2 of Clovers",      value: 2 },
  { text: "p", color: "black", name: "3 of Clovers",      value: 3 },
  { text: "q", color: "black", name: "4 of Clovers",      value: 4 },
  { text: "r", color: "black", name: "5 of Clovers",      value: 5 },
  { text: "s", color: "black", name: "6 of Clovers",      value: 6 },
  { text: "t", color: "black", name: "7 of Clovers",      value: 7 },
  { text: "u", color: "black", name: "8 of Clovers",      value: 8 },
  { text: "v", color: "black", name: "9 of Clovers",      value: 9 },
  { text: "w", color: "black", name: "10 of Clovers",     value: 10 },
  { text: "x", color: "black", name: "Jack of Clovers",   value: 10 },
  { text: "y", color: "black", name: "Queen of Clovers",  value: 10 },
  { text: "z", color: "black", name: "King of Clovers",   value: 10 }
];

function rdmcard() {
    let rc = Math.floor((Math.random() * cards.length));
    playerHand.push(cards[rc]);
    cards.splice(rc, 1);
    playerHand.push(cards[rc]);
    cards.splice(rc, 1);
    dealerHand.push(cards[rc]);
    cards.splice(rc, 1);
    dealerHand.push(cards[rc]);
    cards.splice(rc, 1);
    console.log(playerHand);
    console.log(dealerHand);

    // create new <p>
    const p = document.createElement("p");
    p.classList.add("dcardp");
    //remove card from cards after picking it.

    // card mapping
    


    let card = cards[rc];

    // set text + color
    p.innerText = card.text;
    p.style.color = card.color;

    // add to container
    document.getElementById("cardContainer").appendChild(p);

    // update total
    totalCount += (card.value || 0);

    console.log(card.name);
    console.log("Total:", totalCount);
}

function bnstart() {//starting screen "Begin" button
    document.querySelector(".startscrn").style.display = "none";
    document.querySelector(".betscrn").style.display = "flex";
}
function ststart() {//get bj and bet amount / starting & betting screen
    let betamountStr = document.getElementById("betamount").value;
    let bjamountStr = document.getElementById("bjamount").value;
    if (betamountStr === "") {//if nothing filled in betamount
        alert("Please enter valid numbers!")
        return;
    }
    if (bjamountStr === "") {// default Blackjack 21 if not filled in
        bjamountStr = "21";
    }
    let betamount = Number(betamountStr);
    let bjamount = Number(bjamountStr);
    if (isNaN(betamount) || isNaN(bjamount)) {//if not used any numbers
        alert("Please enter valid numbers!");
        return;
    }
    if (bjamount > 100) {//if bjamount above 100
        alert("Please enter a valid Blackjack amount under 100!")
        return;
    }
    document.querySelector(".betscrn").style.display = "none";
    document.querySelector("main").style.display = "block";

    pmoney = pmoney - betamount;
    console.log("Bet amount = " + betamount + ". BlackJack amount= " + bjamount + ".\nPlayer money = " + pmoney + ".");

    document.getElementById("indicatorpmoney").innerHTML = pmoney

    rdmcard();
}

// Spel start

// door een boolean kan je bewaren wie er aan de beurt is. 
//     boolean op false = computer = dealer
//     boolean op true  = player

// Speler krijgt 2 kaarten zichtbaar (dit is de playerhand)
//     Er is een leeg element waar je de kaart aan toe kan voegen in de html
//     bewaar de waarde in player hand
// Dealer krijgt 2 kaarten onzichtbaar(dit is de dealerhand)
//     Er is een leeg element waar je de kaart aan toe kan voegen in de html
//     bewaar de waarde in dealerhand
//     in code bewaar je welke kaarten de dealer heeft maar aan de hand van de code weet je wat hij wel of niet heeft.

// Na het delen kan een speler kiesen om gehit te worden. Dit betekend een extra kaart. 
// Na hit check je of player over 21 is of niet.