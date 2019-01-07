/*

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all 
unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

*/

const combinationSum = function(candidates, target) {
  // declare solutions and set to empty array
  let solutions = [];
  // sort candidates
  candidates.sort((a, b) => {
    return b - a;
  });
  const add = function(array, sum, index) {
    if (sum < target) {
      for (let x = index; x < candidates.length; x++) {
        add([...array, candidates[x]], sum + candidates[x], x);
      }
    } else if (sum === target) {
        solutions.push(array);
    }
  };
  add([], 0, 0);
  // return solutions
  return solutions;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[7], [2,2,3]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2], [2,3,3], [3,5]]
