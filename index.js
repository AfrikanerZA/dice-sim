const h1 = document.querySelector("h1");
const playerDice1 = document.querySelectorAll(".playerDice1");
const playerDice2 = document.querySelectorAll(".playerDice2");

for (let i = 0; i < playerDice1.length && playerDice2.length; i++) {
    playerDice1[i].setAttribute("class", "displayNoDice");
    playerDice2[i].setAttribute("class", "displayNoDice");

    if (i === playerDice1.length - 1 && i === playerDice2.length - 1) {
        playerDice1[i].setAttribute("class", "displayDice");
        playerDice2[i].setAttribute("class", "displayDice");
    }
}

let player1 = 0;
let player2 = 0;
let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");

function randomDiceFun(){
    let randomOutput1 = Math.floor(Math.random() * playerDice1.length);
    let randomOutput2 = Math.floor(Math.random() * playerDice2.length);

    for (let i = 0; i < playerDice1.length && playerDice2.length; i++) {
        playerDice1[i].setAttribute("class", "displayNoDice");
        playerDice2[i].setAttribute("class", "displayNoDice");
    }

    playerDice1[randomOutput1].removeAttribute("class");
    playerDice2[randomOutput2].removeAttribute("class");   

    if (randomOutput1 > randomOutput2) {
        h1.innerHTML = "Player 1 Won";
        player1++;
    } else if (randomOutput1 < randomOutput2) {
        h1.innerHTML = "Player 2 Won";
        player2++;
    } else {
        h1.innerHTML = "Draw";
    }

    player1Score.innerHTML = player1;
    player2Score.innerHTML = player2;

    console.log(`player 1: ${player1}\nplayer 2: ${player2}`);
}

const clearBtn = document.querySelector("#clearBtn");



function clear(){
    for (let i = 0; i < playerDice1.length && playerDice2.length; i++) {
        playerDice1[i].setAttribute("class", "displayNoDice");
        playerDice2[i].setAttribute("class", "displayNoDice");
    }

    playerDice1[playerDice1.length - 1].removeAttribute("class");
    playerDice2[playerDice2.length - 1].removeAttribute("class");

    h1.innerHTML = "Who Will Win?";

    player1 = 0;
    player2 = 0;

    player1Score.innerHTML = player1;
    player2Score.innerHTML = player2;

    console.log("All cleared.");
}

// TODO
// Mobile Responsive
// Clear button