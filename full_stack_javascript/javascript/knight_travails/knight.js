// 8 x 8 board
const board = new Array(8).fill(0).map((row) => new Array(8).fill(0));
const moves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function isValidMove(move) {
  const [x, y] = move;
  return x >= 0 && x < 8 && y >= 0 && y < 8 && y < 8;
}

function toMoveNotation(coord) {
  return `(${coord[0]},${coord[1]})`;
}

function isVisited(path, pos) {
  for (let coord of path) {
    if (pos[0] === coord[0] && pos[1] === coord[1]) return true;
  }
  return false;
}

// This function receitas a path (array of visited coordinates) and uses the last coordinate
// to create new paths by adding a new coordinate for each of the eight possible knight moves
function createEightWayPaths(path) {
  let currentPos = path[path.length - 1]; // last coordinate visited
  let newPaths = []; // array to store at most 8 new paths
  for (let move of moves) {
    const nextPos = [currentPos[0] + move[0], currentPos[1] + move[1]]; // next coordinate
    if (isValidMove(nextPos) && !isVisited(path, nextPos)) {
      // checks if move is valid and not visited
      newPaths.push([...path, nextPos]);
    }
  }
  return newPaths;
}

function isGoalMet(path, endPos) {
  for (let pos of path) {
    if (pos[0] === endPos[0] && pos[1] === endPos[1]) {
      return true;
    }
  }
  return false;
}

let paths = [];
let run = 0;
function knightMoves(startPos, endPos) {
  if (paths.length === 0) paths = [[startPos]]; // array to store all paths from startPos to endPos

  let newPaths = [];

  for (let path of paths) {
    if (isGoalMet(path, endPos)) {
      console.log(path);
      return path;
    }
  }

  for (let path of paths) {
    newPaths = newPaths.concat(createEightWayPaths(path));
  }
  paths = newPaths;
  run++;
  if (run > 20) {
    console.log("No solution found.");
    return null;
  }
  return knightMoves(startPos, endPos);
}

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
