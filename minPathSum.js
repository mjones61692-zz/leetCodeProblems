/*

Given a m x n grid filled with non-negative numbers, find a path from top left to 
bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

const minPathSum = (arr) => {
  let grid = [];
  let m = arr.length;
  let n = arr[0].length;
  for (let row = 0; row < m; row++) {
    grid[row] = [];
    for (let col = 0; col < n; col++) {
      if (row === 0 && col == 0) {
        grid[row][col] = arr[row][col];
      } else {
        let top = row === 0 ? Infinity : grid[row - 1][col];
        let left = col === 0 ? Infinity : grid[row][col - 1];
        grid[row][col] = Math.min(top, left) + arr[row][col];
      }
    }
  }
  return grid[m - 1][n - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // 7
