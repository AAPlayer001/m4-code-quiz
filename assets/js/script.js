const startButton = document.querySelector(".start-button");
const titleContent = document.querySelector('.main-title-detail');

var outOfQuestions = false;
var timer;
var timerSeconds;
var questionArray = [0, 1, 2, 3, 4];
var questionNum;
var questionText;
var answerText;
var otherText;

function startQuiz() {
  outOfQuestions = false;
  timerSeconds = 60;
  startButton.disabled = true;
  presentQuestion();
  countDown();
}

function presentQuestion() {
  var chosenQuestion = 
    questionArray[Math.floor(Math.random() * questionArray.length)];
  switch (chosenQuestion) {
    case 0:
      questionNum = 1;
      questionText = "Commonly used data types do NOT include:";
      answerText = "alerts";
      otherText = ["strings", "booleans", "alerts", "numbers"];
      break;
    case 1:
      questionNum = 2;
      questionText =
        "The condition in an 'If / Else' statement is enclosed with:";
      answerText = "parenthesis";
      otherText = [
        "curly brackets",
        "quotes",
        "parenthesis",
        "square brackets",
      ];
      break;
    case 2:
      questionNum = 3;
      questionText = "Arrays in JavaScript can be used to store:";
      answerText = "all of the above";
      otherText = [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ];
      break;
    case 3:
      questionNum = 4;
      questionText =
        "String values must be enclosed within _________ when being assigned to variables.";
      answerText = "quotes";
      otherText = ["commas", "curly brackets", "quotes", "parenthesis"];
      break;
    case 4:
      questionNum = 5;
      questionText =
        "A very useful tool used during development and debugging for printing content to the debugger is:";
      answerText = "console.log";
      otherText = ["JavaScript", "terminal/bash", "for loops", "console.log"];
      break;
  }


  shuffleButtonAnswers(otherText);
}

function shuffleButtonAnswers(chosenArray) {
  for (let arrayOne = chosenArray.length - 1; arrayOne > 0; arrayOne--) {
    const arrayTwo = Math.floor(Math.random() * (arrayOne + 1));
    [chosenArray[arrayOne], chosenArray[arrayTwo]] = [
      chosenArray[arrayTwo],
      chosenArray[arrayOne],
    ];
  }
  return chosenArray;
}

function countDown() {
  timer = setInterval(function () {
    timerSeconds--;
    "whateverTimerClassIs".textContent = `Time Remaining: ${timerSeconds}`;
    if (timerSeconds >= 0) {
      if (outOfQuestions && timerSeconds > 0) {
        clearInterval(timer);
        gameWon();
      }
    }
    if (timerSeconds === 0) {
      clearInterval(timer);
      gameLost();
    }
  }, 1000);
}

function gameWon() {
    titleContent.textContent = "Quiz Complete!";

}

function gameLost() {
    titleContent.textContent = "Out of Time!";
}

startButton.addEventListener("click", startQuiz);
