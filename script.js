const input = document.getElementById("input-box");
const okButton = document.getElementById("ok-btn");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset-btn");
const resultText = document.getElementById("result");
const tryText = document.getElementById("try");
var randomNumber = randomGenerator();
var scoreValue = 0;
var tryValue = 0;

function randomGenerator() {
    var number = Math.round(Math.random() * 5);
    return number;
}

var click = () => {
    if (input.value == randomNumber) {
        scoreValue++;
        score.innerText = `Score: ${scoreValue}`;
        resultText.innerText = "Correct!";
        tryValue = 0;
        setTimeout(() => {
            tryText.innerText = `Tries: 0`;
        }, 1500);
    }
    else {
        tryValue++;
        tryText.innerText = `Tries: ${tryValue}`;
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
    tryValue = 0;
    tryText.innerText = `Tries: 0`;
}
resetButton.onclick = reset;
