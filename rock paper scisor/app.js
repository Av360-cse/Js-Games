let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoices = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * options.length);
  return options[randomIdx];
};
const drawGame = () => {
  msg.innerText = "Game was  Draw. play again.";
  msg.style.color = "orange";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
    msg.style.color = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `you Lose! ${compChoice} beats ${userChoice}`;
    msg.style.color = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = getCompChoices();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
