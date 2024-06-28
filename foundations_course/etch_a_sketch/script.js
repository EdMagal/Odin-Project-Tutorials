// // default board size
// let boardSize = 16;
// const board = document.getElementById("container");

// buildBoard(boardSize);

// // create a 16 x 16 board of square
// function buildBoard(boardSize) {
//   clearBoard();
//   const squareSize = 1000 / boardSize;
//   for (let i = 0; i < boardSize; i++) {
//     const col = document.createElement("div");
//     col.id = `col${i}`;
//     col.className = "col";
//     board.appendChild(col);
//     for (let j = 0; j < boardSize; j++) {
//       const square = document.createElement("div");
//       square.id = `r${i}c${j}`;
//       square.className = "square";
//       square.style = `width: ${squareSize}px; height: ${squareSize}px`;
//       document.getElementById(`col${i}`).appendChild(square);
//       square.addEventListener("mouseover", () => {
//         square.style.backgroundColor = "darkgrey";
//       });
//     }
//   }
// }

// function setBoardSize() {
//   const getUserBoardSize = Number(prompt("Please enter a board size"));
//   if (getUserBoardSize > 0 && getUserBoardSize < 100) {
//     boardSize = getUserBoardSize;
//     buildBoard(boardSize);
//   } else {
//     alert("Please enter a number between 1 and 100");
//     setBoardSize();
//   }
// }

// function clearBoard() {
//   board.innerHTML = "";
//

// saves buttons into 5 different variables
const [
  setSize,
  clearBoard,
  setColorGray,
  setColorRainbow,
  setColorProgressive,
] = document.querySelectorAll("button");

class Board {
  constructor(boardSize) {
    this.board = document.getElementById("container");
    this.boardFrameSize = this.board.getBoundingClientRect().width;
    this.boardSize = boardSize;
    this.squareSize = this.boardFrameSize / this.boardSize;
    this.squareColor = 0; // default 0: darkgray, 1: rainbow, 2: Darkens
  }

  // Asks the user to pick a number between 1 and 100 and sets it to boardSize
  setBoardSize() {
    const userInput = Number(prompt("Please enter a board size"));
    if (userInput > 0 && userInput < 101) {
      this.boardSize = userInput;
    } else {
      alert("Please enter a number between 1 and 100");
      setBoardSize();
    }
  }

  setSquareSize() {
    this.squareSize = this.boardFrameSize / this.boardSize;
  }

  setSquareColor(num) {
    this.squareColor = num;
  }
  // Draws the board based on the current boardSize
  drawBoard() {
    this.clearBoard();
    for (let i = 0; i < this.boardSize; i++) {
      const col = document.createElement("div");
      this.board.appendChild(col);
      for (let j = 0; j < this.boardSize; j++) {
        const square = new Square(this.squareSize);
        const squareDiv = square.createSquare();
        col.appendChild(squareDiv);
      }
    }
  }

  clearBoard() {
    this.board.innerHTML = "";
  }
}

class Square {
  constructor(squareSize) {
    this.squareSize = squareSize;
    this.alpha = 0;
  }

  createSquare(currentColor) {
    const square = document.createElement("div");
    square.className = "square";
    square.style = `width: ${this.squareSize}px; height: ${this.squareSize}px`;
    square.addEventListener("mouseover", paintSquare);
    square.addEventListener("mousedown", paintSquare);

    function paintSquare(e) {
      if (e.buttons === 1) {
        if (b.squareColor === 0) {
          square.style.backgroundColor = "darkgray";
        } else if (b.squareColor === 1) {
          const hue = Math.round(Math.random() * 359);
          square.style.backgroundColor = `hsla(${hue},100%,50%,1)`;
        } else {
          if (this.alpha < 1) this.alpha += 0.1;
          square.style.backgroundColor = `hsla(0,0%,0%,${this.alpha})`;
        }
      }
    }
    return square;
  }
}

setSize.addEventListener("click", () => {
  b.setBoardSize();
  b.setSquareSize();
  b.drawBoard();
});

clearBoard.addEventListener("click", () => {
  b.clearBoard();
  b.drawBoard();
});

setColorGray.addEventListener("click", () => {
  b.setSquareColor(0);
});

setColorRainbow.addEventListener("click", () => {
  console.log(b);
  b.setSquareColor(1);
});

setColorProgressive.addEventListener("click", () => {
  b.setSquareColor(2);
});

const b = new Board(16);
b.drawBoard();
