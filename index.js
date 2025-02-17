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
let playerName1 = "";
let playerName2 = "";

function randomDiceFun(){
    let randomOutput1 = Math.floor(Math.random() * playerDice1.length);
    let randomOutput2 = Math.floor(Math.random() * playerDice2.length);
    let inputOdds = document.querySelector("#inputOdds").value;
    let oddsNumber = parseInt(inputOdds);
    const rollBtn = document.querySelector("#rollBtn");

    if (inputOdds > 0) {
        for (let i = 0; i < playerDice1.length && playerDice2.length; i++) {
            playerDice1[i].setAttribute("class", "displayNoDice");
            playerDice2[i].setAttribute("class", "displayNoDice");
        }
    
        playerDice1[randomOutput1].removeAttribute("class");
        playerDice2[randomOutput2].removeAttribute("class");   
    
        if (randomOutput1 > randomOutput2) {
            if (playerName1 === null) {
                h1.innerHTML = "A point to Player 1";
            } else {
                h1.innerHTML = `A point to ${playerName1}`;
            }

            player1++;

            if(player1 === oddsNumber) {
                rollBtn.disabled = true;
                console.log("Game end");
                if (playerName1 === null) {
                    h1.innerHTML = "Player 1 won!";
                    swal("You won, Player 1!", "Click clear to restart");
                } else {
                    h1.innerHTML = `${playerName1} won!`;
                    swal(`You won, ${playerName1}`, "Click clear to restart");
                }
            }
        } else if (randomOutput1 < randomOutput2) {
            if (playerName2 === null) {
                h1.innerHTML = "A point to Player 2";
            } else {
                h1.innerHTML = `A point to ${playerName2}`;
            }

            player2++;

            if(player2 === oddsNumber) {
                rollBtn.disabled = true;
                console.log("Game end");
                if (playerName2 === null) {
                    h1.innerHTML = "Player 2 won!";
                    swal("You won, Player 2!", "Click clear to restart");
                } else {
                    h1.innerHTML = `${playerName2} won!`;
                    swal(`You won, ${playerName2}`, "Click clear to restart");
                }
            }
        } else {
            h1.innerHTML = "Draw";
        }
    
        player1Score.innerHTML = player1;
        player2Score.innerHTML = player2;
    
        console.log(`player 1: ${player1}\nplayer 2: ${player2}`);
        console.log(`Odds number: ${oddsNumber}`);
    } else {
        swal("Best out of what?", "Please input a number", "warning");
    }
}



let playerScoreName1 = document.querySelector("#playerScoreName1");
let playerScoreName2 = document.querySelector("#playerScoreName2");
let promptName1 = document.querySelector("#promptName1");
let promptName2 = document.querySelector("#promptName2");

function playerNames(){
    while (playerName1 === "") {
        playerName1 = prompt("What's your name, player 1? If you click cancel you will be known as... Player 1");
    }

    while (playerName2 === "") {
        playerName2 = prompt("What's your name, player 2? If you click cancel you will be known as... Player 2");
    }

    console.log(`Player 1 Name: ${playerName1}\nPlayer 2 Name: ${playerName2}`);

    if (playerName1 === null) {
        playerName1 = "Player 1";
    }

    if (playerName2 === null) {
        playerName2 = "Player 2";
    }

    playerScoreName1.innerHTML = playerName1;
    playerScoreName2.innerHTML = playerName2;
    promptName1.innerHTML = playerName1;
    promptName2.innerHTML = playerName2;
}
setTimeout(playerNames, 500);

const oddsChart = document.querySelector("#oddsChart");
oddsChart.addEventListener("submit", function(event){
    event.preventDefault();
})