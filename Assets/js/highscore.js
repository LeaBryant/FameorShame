var playerListEl = document.querySelector("#player-list");
var clear = document.getElementById("clear");
var initialFormEl = document.getElementById("enterInitials");
var userInput = document.getElementById("userInput");
var playerListEl = document.getElementById("player-list");
var submitBtn = document.querySelector("#submitBtn");

function handleFormSubmit(event) {
  event.preventDefault();
  var userText = userInput.value.trim();
  var storedScores = JSON.parse(localStorage.getItem("score")) || [];
  var namePlayer = {
    initials: userInput.value,
    score: grade.textContent,
  };
  storedScores.push(namePlayer);
  localStorage.setItem("score", JSON.stringify(storedScores));
  if (userText === "") {
    return;
  } else {
    playerListEl.append(userInput.value + " - " + grade.textContent + " POINTS");
  }
}

var storedScores = JSON.parse(localStorage.getItem("score")) || [];
for (let i = 0; i < storedScores.length; i++) {
  var highscore = storedScores[i];
  var ul = document.createElement("ul");
  ul.textContent = `${highscore.initials} - ${highscore.score} POINTS`;
  playerListEl.append(ul);
}

function clearScores() {
  if (storedScores.length >= 10) {
    localStorage.removeItem("score");
    return;
  }
  localStorage.clear();
  ul.textContent = ``;
}

