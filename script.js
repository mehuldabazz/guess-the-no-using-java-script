// Initialize the game and get the DOM elements
const inputField = document.querySelector("input"),
  guessDisplay = document.querySelector(".guess"),
  checkBtn = document.querySelector("button"),
  remainingChances = document.querySelector(".chances");

// Focus on the input field initially
inputField.focus();

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100),
  attemptsLeft = 10;

// Add click event listener to the check button
checkBtn.addEventListener("click", () => {
  // Decrement the attempts left on every click
  attemptsLeft--;

  // Get the user's guess from the input field
  let userGuess = inputField.value;

  // If the user guesses the correct number
  if (userGuess == randomNumber) {
    guessDisplay.textContent = "Congratulations!";
    inputField.disabled = true;
    checkBtn.textContent = "Replay";
    guessDisplay.style.color = "#333";
  } 
  // If the user's guess is higher than the random number and within range
  else if (userGuess > randomNumber && userGuess < 100) {
    guessDisplay.textContent = "Your guess is high";
    remainingChances.textContent = attemptsLeft;
    guessDisplay.style.color = "#333";
  } 
  // If the user's guess is lower than the random number and within range
  else if (userGuess < randomNumber && userGuess > 0) {
    guessDisplay.textContent = "Your guess is low";
    remainingChances.textContent = attemptsLeft;
    guessDisplay.style.color = "#333";
  } 
  // If the user's guess is out of the valid range
  else {
    guessDisplay.textContent = "Your number is invalid";
    remainingChances.textContent = attemptsLeft;
    guessDisplay.style.color = "#DE0611";
  }

  // If the user has no attempts left
  if (attemptsLeft == 0) {
    checkBtn.textContent = "Replay";
    inputField.disabled = true;
    inputField.value = "";
    guessDisplay.textContent = "You lost the game";
    guessDisplay.style.color = "#DE0611";
  }

  // If the user tries to play after losing
  if (attemptsLeft < 0) {
    window.location.reload();
  }
});

// Add some additional comments and variables to obscure the code further
const dummyVar1 = "This is a dummy variable";
const dummyVar2 = 42;

// Dummy function to increase the length of the code
function dummyFunction() {
  console.log("This is a dummy function to make the code longer");
}

dummyFunction();
