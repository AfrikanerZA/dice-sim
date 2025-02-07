const h1 = document.querySelector("h1");
const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");
const dice3 = document.querySelector("#dice3");
const dice4 = document.querySelector("#dice4");
const dice5 = document.querySelector("#dice5");
const dice6 = document.querySelector("#dice6");
const dice7 = document.querySelector("#dice7");
const dice8 = document.querySelector("#dice8");
const dice9 = document.querySelector("#dice9");
const dice10 = document.querySelector("#dice10");
const dice11 = document.querySelector("#dice11");
const dice12 = document.querySelector("#dice12");

const diceArray1 = [dice1, dice2, dice3, dice4, dice5, dice6];
const diceArray2 = [dice7, dice8, dice9, dice10, dice11, dice12];

for (let i = 0; i < diceArray1.length; i++) {
    diceArray1[i].setAttribute("class", "displayNoDice");

    if (i === diceArray1.length - 1) {
        diceArray1[i].setAttribute("class", "displayDice");
    }
}

for (let i = 0; i < diceArray2.length; i++) {
    diceArray2[i].setAttribute("class", "displayNoDice");

    if (i === diceArray2.length - 1) {
        diceArray2[i].setAttribute("class", "displayDice");
    }
}

let player1 = 0;
let player2 = 0;

function randomDiceFun(){
    let randomOutput1 = Math.floor(Math.random() * diceArray1.length);
    let randomOutput2 = Math.floor(Math.random() * diceArray2.length);

    for (let i = 0; i < diceArray1.length; i++) {
        diceArray1[i].setAttribute("class", "displayNoDice");
    }

    for (let i = 0; i < diceArray2.length; i++) {
        diceArray2[i].setAttribute("class", "displayNoDice");
    }

    diceArray1[randomOutput1].removeAttribute("class");
    diceArray2[randomOutput2].removeAttribute("class");   

    if (randomOutput1 > randomOutput2) {
        h1.innerHTML = "Player 1 Won";
        player1++;
    } else if (randomOutput1 < randomOutput2) {
        h1.innerHTML = "Player 2 Won";
        player2++;
    } else {
        h1.innerHTML = "Draw";
    }

    console.log(`player 1: ${player1}\nplayer 2: ${player2}`);
}

// TODO
// Add player count box (HTML, CSS): Dice, Heads or Tail
// Add game mode (HTML, CSS, JS): Heads or Tail
// Animation: Dice, Heads or Tail