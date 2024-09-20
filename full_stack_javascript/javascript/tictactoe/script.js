const gameOverMessage = document.getElementById("game-over-msg");

const player = (function createPlayer() {
  // creates a player object
  let player = "X";

  const getPeg = () => player;

  const switchPlayer = () => {
    player = player === "X" ? "O" : "X";
  };

  function play(row, col) {
    let played = false;

    if (!board.hasWon() && !board.isBoardFull()) {
      played = board.placePeg(row, col, player);
      board.displayBoard();
      if (board.hasWon()) {
        console.log(`${player} wins!`);
        gameOverMessage.textContent = `${player} wins!`;
        return true;
      }

      if (board.isBoardFull()) {
        console.log("It's a draw!");
        gameOverMessage.textContent = "It's a draw!";
        return true;
      }
    }

    if (played) switchPlayer();
  }

  return {
    getPeg,
    switchPlayer,
    play,
  };
})();

const board = (function createBoard() {
  const boardContainer = document.getElementById("board");
  let consoleBoard = [];
  let hmtlBoard = [];
  // creates a 3x3 tic tac toe board
  for (let row = 0; row < 3; row++) {
    hmtlBoard.push([]);
    consoleBoard.push([]);
    for (let col = 0; col < 3; col++) {
      const cell = createCell();
      cell.setCellPos(row, col);
      boardContainer.appendChild(cell.cellContainer);
      cell.cellContainer.addEventListener("click", () => player.play(row, col));
      hmtlBoard[row].push(cell);
      consoleBoard[row].push("");
    }
  }

  // displays the board
  const displayBoard = () => {
    console.table(consoleBoard);
  };

  const placePeg = (row, col, playerPeg) => {
    console.log({ row, col, playerPeg });
    if (consoleBoard[row][col] !== "") {
      console.log("This cell is already occupied!");
      return false;
    }
    consoleBoard[row][col] = playerPeg;
    hmtlBoard[row][col].setValue(playerPeg);
    return true;
  };

  // checks if the board is full
  const isBoardFull = () => {
    return consoleBoard.every((row) => row.every((cell) => cell !== ""));
  };

  // checks if a player has won
  const hasWon = () => {
    // checks rows
    for (let i = 0; i < 3; i++) {
      if (
        consoleBoard[i][0] === consoleBoard[i][1] &&
        consoleBoard[i][1] === consoleBoard[i][2] &&
        consoleBoard[i][0] !== ""
      ) {
        return true;
      }
    }

    // checks columns
    for (let i = 0; i < 3; i++) {
      if (
        consoleBoard[0][i] === consoleBoard[1][i] &&
        consoleBoard[1][i] === consoleBoard[2][i] &&
        consoleBoard[0][i] !== ""
      ) {
        return true;
      }
    }

    // checks diagonals
    if (
      (consoleBoard[0][0] === consoleBoard[1][1] &&
        consoleBoard[1][1] === consoleBoard[2][2] &&
        consoleBoard[0][0] !== "") ||
      (consoleBoard[0][2] === consoleBoard[1][1] &&
        consoleBoard[1][1] === consoleBoard[2][0] &&
        consoleBoard[0][2] !== "")
    ) {
      return true;
    }
    return false;
  };

  // resets the console board
  const resetBoard = () => {
    consoleBoard.forEach((row) => row.fill(""));
    gameOverMessage.textContent = "";
    board.displayBoard();
    hmtlBoard.forEach((row) =>
      row.forEach((col) => {
        col.setValue("");
        col.cellContainer.textContent = "";
      })
    );
    if (player.getPeg() === "O") player.switchPlayer();
  };

  return {
    displayBoard,
    placePeg,
    isBoardFull,
    hasWon,
    resetBoard,
  };
})();

function createCell() {
  const cellContainer = document.createElement("div");
  cellContainer.classList.add("cell");

  let cellValue = "";
  let row = "";
  let col = "";

  const setValue = (value) => {
    cellValue = value;
    cellContainer.textContent = value;
  };

  const getValue = () => cellValue;

  const setCellPos = (row, col) => {
    row = row;
    col = col;
  };

  return {
    setValue,
    getValue,
    setCellPos,
    cellContainer,
  };
}
function newGame() {
  console.log(
    `${player.getPeg()}'s turn. Enter player.play(row,col) to place your mark, where row and col are a number between 0 and 2!`
  );
}

newGame();
