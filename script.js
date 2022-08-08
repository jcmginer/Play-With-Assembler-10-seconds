let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");

let start = document.getElementById("btnStart");
let startGame = document.getElementById("btnStartGame");
let clickHere = document.getElementById("btnClickHere");
let playAgain = document.getElementById("btnPlayAgain");

let counterVal = 0;

step1.style.display = "";
step2.style.display = "none";
step3.style.display = "none";
step4.style.display = "none";

/* Storage User and Clicks */

let user = document.getElementById("user");
let numberC = document.getElementById('counter-label3');
let ranking = document.getElementById("ranking");

let myPlayers = {
    players: []
}
if(localStorage.getItem("myPlayers") !== null){
    myPlayers = JSON.parse(localStorage.getItem("myPlayers"));
    ranking.innerHTML = JSON.stringify(myPlayers);
} else {
    ranking.innerHTML = "0";
}

start.onclick = function () {
    myPlayers.players.push([user.value, numberC.value]);
    ranking.innerHTML = JSON.stringify(myPlayers);
    localStorage.setItem("myPlayers", JSON.stringify(myPlayers));
    step1.style.display = "none";
    step2.style.display = "";
    step3.style.display = "none";
    step4.style.display = "none";
    console.log(localStorage);
    console.log(numberC);
}

window.onload = function () {
function myTimer() {
    console.log("Ya han pasado los 10 segundos.");
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "";
}

startGame.onclick = function () {
    setTimeout(myTimer, 10000);
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "";
    step4.style.display = "none";
}

    clickHere.onclick = function () {
        incrementClick();
    }
    function incrementClick() {
        updateDisplay(++counterVal);
    }

    function updateDisplay(val) {
        document.getElementById('counter-label3').innerHTML = val;
        document.getElementById('counter-label4').innerHTML = val;
        document.getElementById('totalClicks').innerHTML = val;
    }
}

playAgain.onclick = function () {
    step1.style.display = "";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";
}

