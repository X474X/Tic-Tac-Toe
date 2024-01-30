const columns = document.querySelectorAll(".col");
const player1 = document.querySelector(".p1");
const player2 = document.querySelector(".p2");
let matrix = [[], [], []];
let currentValue = true;

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
      return 1;
    }
    xCount = 0;
    oCount = 0;
  }
  return 0;
};

for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener("click", () => {
    if (currentValue) {
      if (columns[i].innerHTML === "") {
        columns[i].innerHTML = "X";
        matrix[columns[i].getAttribute("row")][columns[i].getAttribute("col")] =
          "X";
        player1.style.color = "gray";
        player2.style.color = "black";
      }
    } else {
      if (columns[i].innerHTML === "") {
        columns[i].innerHTML = "O";
        matrix[columns[i].getAttribute("row")][columns[i].getAttribute("col")] =
          "O";
        player1.style.color = "black";
        player2.style.color = "gray";
      }
    }
    currentValue = !currentValue;
    console.log(checkRow());
    // console.log(matrix);
  });
}
