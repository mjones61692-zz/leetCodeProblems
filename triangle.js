/*

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

*/

const triangle = (tree) => {
  let grid = [];
  for (let row = 0; row < tree.length; row++) {
    grid[row] = [];
    for (let col = 0; col < tree[row].length; col++) {
      if (row === 0) {
        grid[row][col] = tree[row][col];
      } else {
        let left = grid[row - 1][col - 1] ? grid[row - 1][col - 1] : Infinity;
        let right = grid[row - 1][col] ? grid[row - 1][col] : Infinity;
        grid[row][col] = tree[row][col] + Math.min(left, right);
      }
    }
  }
  return Math.min.apply(Math, grid[grid.length - 1]);
};

console.log(triangle([
[2],
[3,4],
[6,5,7],
[4,1,8,3]
])); // 11
