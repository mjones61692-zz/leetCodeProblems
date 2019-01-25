/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/

const numberOfIslands = function(string) {
  let count = 0;
  let islands = string.split('\n').map((row) => {
    return row.split('');
  });
  let height = islands.length;
  let width = islands[0].length;
  const removeAndCheck = function(row, col) {
    islands[row][col] = '0';
    if (row + 1 < height && islands[row + 1][col] === '1') {
      removeAndCheck(row + 1, col);
    }
    if (col + 1 < width && islands[row][col + 1] === '1') {
      removeAndCheck(row, col + 1);
    }
  }
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (islands[row][col] === '1') {
        count++;
        removeAndCheck(row, col);
      }
    }
  }
  return count;
};

let islands1 = `11110
11010
11000
00000`;

let islands2 = `11000
11000
00100
00011`;

console.log(numberOfIslands(islands1)); // 1
console.log(numberOfIslands(islands2)); // 3
