// Iteration 8: Making scoreboard functional
const scoreBoard= document.getElementById("score-board");

scoreBoard.innerText = localStorage.getItem("total");

const playAgain = document.getElementById("play-again-button").addEventListener("click",()=>{
    window.location.href = 'game.html';
})