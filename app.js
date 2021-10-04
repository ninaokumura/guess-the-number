//Get a random number between 1 and 20
const state = {
  randomSecretNumber: Math.trunc(Math.random() * 20) + 1,
  score: 20,
  highscore: 0,
};

//UI elements

const ui = {
  checkButton: document.querySelector(".check"),
  guessInput: document.querySelector(".guess-num"),
  secretNumber: document.querySelector(".secret-num"),
  messageEl: document.querySelector(".message"),
  highscore: document.querySelector(".highscore"),
  gameContainer: document.querySelector(".game-container"),
  score: document.querySelector(".score"),
  playAgain: document.querySelector(".again"),
};

function displayMessage(message) {
  ui.messageEl.textContent = message;
}

//Implement key event to fire the button check
ui.guessInput.addEventListener("keyup", function (evt) {
  if (evt.key === "Enter") {
    console.log("Enter pressed");
    ui.checkButton.click();
  }
});

//Reference the buton
ui.checkButton.addEventListener("click", function () {
  const guess = Number(ui.guessInput.value);

  console.log(guess);

  //implement game logic
  //When there is no input
  if (!guess) {
    displayMessage("Not a number!");

    //When player wins
  } else if (guess === state.randomSecretNumber) {
    displayMessage("Correct Number! You won!");
    ui.secretNumber.textContent = state.randomSecretNumber;
    //Store the highscore
    if (state.score > state.highscore) {
      state.highscore = state.score;
      ui.highscore.textContent = state.highscore;
      ui.gameContainer.style.backgroundColor = " #b2f2bb";
    }
    //When guess is wrong
  } else if (guess !== state.randomSecretNumber) {
    if (state.score > 1) {
      displayMessage(
        guess > state.randomSecretNumber
          ? "Guess is too high"
          : "Guess is too low"
      );
      state.score--;
      ui.score.textContent = state.score;
    } else {
      displayMessage("Game over!");
      ui.score.textContent = 0;
    }
  }
  ui.guessInput.value = "";
});

//Reset game
ui.playAgain.addEventListener("click", function () {
  state.score = 20;
  state.randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
  // ui.guessInput.value = " ";
  // state.highscore = state.score;
  ui.secretNumber.textContent = "?";
  ui.score.textContent = state.score;

  displayMessage("Start guessing...");
  ui.gameContainer.style.backgroundColor = "#d3f9d8";
});
