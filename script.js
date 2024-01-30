const columns = document.querySelectorAll(".col");
const player1 = document.querySelector(".p1");
const player2 = document.querySelector(".p2");
const winnerMessage = document.querySelector(".winner-message");
const button = document.querySelector(".refresh");
let matrix = [[], [], []];
let currentValue = true;
let winner = "";
let gameOn = true;
player1.style.color = "black";

const checkRow = () => {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "X") {
        xCount++;
      }
      if (matrix[i][j] === "O") {
        oCount++;
      }
    }
    if (xCount === 3 || oCount === 3) {
      winner = xCount === 3 ? "X" : "O";
      return 1;
    }
    xCount = 0;
    oCount = 0;
  }
  return 0;
};

const checkColoumn = () => {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === "X") {
        xCount++;
      }
      if (matrix[j][i] === "O") {
        oCount++;
      }
    }
    if (xCount === 3 || oCount === 3) {
      winner = xCount === 3 ? "X" : "O";
      return 1;
    }
    xCount = 0;
    oCount = 0;
  }
  return 0;
};

const checkFirstDiagonal = () => {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) {
        if (matrix[i][j] === "X") {
          xCount++;
        }
        if (matrix[i][j] === "O") {
          oCount++;
        }
      }
    }
    if (xCount === 3 || oCount === 3) {
      winner = xCount === 3 ? "X" : "O";
      return 1;
    }
  }
  return 0;
};

const checkSecondDiagonal = () => {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i + j === matrix.length - 1) {
        if (matrix[i][j] === "X") {
          xCount++;
        }
        if (matrix[i][j] === "O") {
          oCount++;
        }
      }
    }
    if (xCount === 3 || oCount === 3) {
      winner = xCount === 3 ? "X" : "O";
      return 1;
    }
  }
  return 0;
};

for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener("click", () => {
    if (gameOn) {
      if (currentValue) {
        if (columns[i].innerHTML === "") {
          columns[i].innerHTML = "X";
          matrix[columns[i].getAttribute("row")][
            columns[i].getAttribute("col")
          ] = "X";
          player1.style.color = "gray";
          player2.style.color = "black";
          player1.innerHTML = "Player 1 = X";
          player2.innerHTML = ">Player 2 = O";
          player1.style.marginLeft = "0px";
          player2.style.marginLeft = "-18px";
        }
      } else {
        if (columns[i].innerHTML === "") {
          columns[i].innerHTML = "O";
          matrix[columns[i].getAttribute("row")][
            columns[i].getAttribute("col")
          ] = "O";
          player1.style.color = "black";
          player2.style.color = "gray";
          player1.innerHTML = ">Player 1 = X";
          player2.innerHTML = "Player 2 = O";
          player1.style.marginLeft = "-18px";
          player2.style.marginLeft = "0px";
        }
      }
      currentValue = !currentValue;
      if (
        checkRow() ||
        checkColoumn() ||
        checkFirstDiagonal() ||
        checkSecondDiagonal()
      ) {
        winnerMessage.innerHTML = "The winner is " + winner;
        player1.style.display = "none";
        player2.style.display = "none";
        button.style.display = "flex";
        winnerMessage.style.display = "inherit";
        gameOn = false;
      }
    }
  });
}

button.addEventListener("click", () => {
  for (let i = 0; i < columns.length; i++) {
    columns[i].innerHTML = "";
  }
  gameOn = true;
  winnerMessage.style.display = "none";
  button.style.display = " none";
  player1.style.display = "inherit";
  player2.style.display = "inherit";
  player1.style.color = "black";
  player2.style.color = "gray";
  player1.innerHTML = ">Player 1 = X";
  player2.innerHTML = "Player 2 = O";
  player1.style.marginLeft = "-18px";
  player2.style.marginLeft = "0px";
  currentValue = true;
  matrix = [[], [], []];
});
