// cache variables
const CHOICES = ["rock", "paper", "scissors"];
const SCORE = [0, 0];
let msg = document.getElementById("msg");
let wrapper = document.getElementById("wrapper");
let playAgain = document.getElementById("again");

function playRound(playerSelection) {
  let randomnizer = Math.floor(Math.random() * 3);
  let computerSelection = CHOICES[randomnizer];

  // Runs when it is a draw.
  if (playerSelection === computerSelection) {
    msg.innerHTML = `It is a draw! Score: ${SCORE[0]}-${SCORE[1]}`;

    // Runs when the player has won the round.
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    SCORE[0]++;
    msg.innerHTML = `You win! ${playerSelection} beats ${computerSelection}! Score: ${SCORE[0]}-${SCORE[1]}`;

    // Runs when the computer has won the round.
  } else {
    SCORE[1]++;
    msg.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}! Score: ${SCORE[0]}-${SCORE[1]}`;
  }

  if (SCORE[0] > 2 || SCORE[1] > 2) {
    wrapper.style = "display: none";
    playAgain.style = "display: block";
    SCORE[0] > 2
      ? (msg.innerHTML = `YOU ARE THE CHAMPION!<br /> Final score: ${SCORE[0]}-${SCORE[1]}`)
      : (msg.innerHTML = `You lost. Come back when you've become stronger.<br /> Final score: ${SCORE[0]}-${SCORE[1]}`);
  }
}

function again() {
  SCORE[0] = 0;
  SCORE[1] = 0;
  msg.innerHTML = "Please, select your move!";
  playAgain.style = "display: none";
  wrapper.style = "display: block";
}
