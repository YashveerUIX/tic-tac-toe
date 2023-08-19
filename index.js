const xClass = "x";
const cClass = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cellElements = document.querySelectorAll("[data-cell]");
const container = document.getElementById("container");
const winningMessageElement = document.getElementById("msg");
const resetButton = document.getElementById("reset");
const winMsg = document.querySelector("[data-msg-text]");
let circleTurn;

startGame();

resetButton.addEventListener("click", startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(cClass);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setHoverClass();
  winningMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? cClass : xClass;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

// function swapTurns() {
//   circleTurn = !circleTurn;
// }

function setHoverClass() {
  container.classList.remove(xClass);
  container.classList.remove(cClass);
  if (circleTurn) {
    container.classList.add(cClass);
  } else {
    container.classList.add(xClass);
  }
}

// function placeMark() {}
// function swapTurns() {}
// function isDraw() {}
// function endGame() {}
// function setHoverClass() {}
