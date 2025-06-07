let secretNumber;
let attempts;
const maxAttempts = 10;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = maxAttempts;
  document.getElementById("attemptsLeft").textContent = attempts;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("feedback").textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attempts--;
  document.getElementById("attemptsLeft").textContent = attempts;

  if (guess === secretNumber) {
    document.getElementById("feedback").textContent = "🎉 Correct! You guessed the number!";
  } else if (attempts === 0) {
    document.getElementById("feedback").textContent = `💥 Game Over! The number was ${secretNumber}.`;
  } else if (guess < secretNumber) {
    document.getElementById("feedback").textContent = "📉 Too low! Try again.";
  } else {
    document.getElementById("feedback").textContent = "📈 Too high! Try again.";
  }
}

function resetGame() {
  startGame();
}

window.onload = startGame;
