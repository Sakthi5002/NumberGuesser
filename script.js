const input = document.getElementById("input-box");
const okButton = document.getElementById("ok-btn");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset-btn");
const resultText = document.getElementById("result");
var randomNumber = randomGenerator();
var scoreValue = 0;

function randomGenerator() {
    var number = Math.round(Math.random() * 5);
    return number;
}

var click = () => {
    if (input.value == randomNumber) {
        scoreValue++;
        score.innerText = `Score: ${scoreValue}`;
        resultText.innerText = "Correct!";
    }
    else {
        resultText.innerText = "Oops. Try Again!";
    }
    setTimeout(() => {
        resultText.innerText = "‎";
    }, 1500);
}
okButton.onclick = click;

var reset = () => {
    scoreValue = 0;
    score.innerText = `Score: ${scoreValue}`;
    randomNumber = randomGenerator();
    resultText.innerText = "‎ ";
    input.value = "";
}
resetButton.onclick = reset;

