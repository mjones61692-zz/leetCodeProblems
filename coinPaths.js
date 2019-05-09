function coinPaths(matrix) {
  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      let top = valid(row - 1, col) ? matrix[row - 1][col] : 0;
      let left = valid(row, col - 1) ? matrix[row][col - 1] : 0;
      matrix[row][col] = matrix[row][col] + Math.max(top, left);
    }
  }
  function valid(row, col) {
    return row >= 0 && row < rowLength && col >= 0 && col < colLength;
  }
  return matrix[rowLength - 1][colLength - 1];
}

const grid1 = [
  [0, 3, 1, 1],
  [2, 0, 0, 4],
  [1, 5, 3, 1]
];

const grid2 = [
  [9, 9, 1, 1],
  [2, 9, 9, 4],
  [1, 5, 9, 9]
];

const grid3 = [
  [0]
];

const grid4 = [
  [10000]
];

console.log(coinPaths(grid1) === 12);
console.log(coinPaths(grid2) === 54);
console.log(coinPaths(grid3) === 0);
console.log(coinPaths(grid4) === 10000);