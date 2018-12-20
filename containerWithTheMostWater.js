/*

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate
(i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and
(i, 0). Find two lines, which together with x-axis forms a container, such that the container
contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

*/

function container(arr) {
  let max = 0;
  arr.forEach((h1, i1) => {
    arr.slice(i1).forEach((h2, i2) => {
      let area = Math.min(h1, h2) * (i2);
      if (area > max) {
        max = area;
      }
    });
  }); 
  return max;
};

console.log(container([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
