// recursion

const robotPathsRecurse = function(m, n) {
  let paths = 0;
  let count = 0;
  const inner = function(row, col) {
    count++;
    if (row === m && col === n) {
      paths++;
    } else {
      if (col + 1 <= n) {
        inner(row, col + 1);
      }
      if (row + 1 <= m) {
        inner(row + 1, col);
      }
    }
  }
  inner(1, 1);
  return [paths, count];
}

// dynamic

const robotPathsDynamic = function(m, n) {
  let grid = new Array(m).fill(null);
  grid = grid.map((element) => new Array(n).fill(null));
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count++;
      if (j === 0 || i === 0) {
        grid[i][j] = 1;
      } else {
        grid[i][j] = grid[i][j - 1] + grid[i - 1][j];
      }
    }
  }
  return [grid[m - 1][n - 1], count];
}

let m = 16;
let n = 16;
let t1 = new Date().getTime();
console.log(robotPathsRecurse(m, n));
let t2 = new Date().getTime();
console.log(robotPathsDynamic(m, n));
let t3 = new Date().getTime();

let tRecurse = t2 - t1;
let tDynamic = t3 - t2;

console.log('Recursion time: ', tRecurse);
console.log('Dynamic time: ', tDynamic);
