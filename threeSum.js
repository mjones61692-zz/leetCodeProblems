/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

function threeSum(n) {
  // brute force
  let len = n.length;
  let solutions = {};
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (n[i] + n[j] + n[k] === 0) {
          let arr = [n[i], n[j], n[k]].sort();
          solutions[arr] = arr;
        }
      }
    }
  }
  return Object.values(solutions);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
