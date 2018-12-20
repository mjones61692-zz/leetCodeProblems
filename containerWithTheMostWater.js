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
  // // brute force
  // let max = 0;
  // arr.forEach((h1, i1) => {
  //   arr.slice(i1).forEach((h2, i2) => {
  //     let area = Math.min(h1, h2) * (i2);
  //     if (area > max) {
  //       max = area;
  //     }
  //   });
  // });
  // return max;

  // optimized
  let max = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let area = Math.min(arr[left], arr[right]) * (right - left);
    if (area > max) {
      max = area;
    }
    if (arr[left] > arr[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};

console.log(container([1, 8, 6, 7, 8, 4, 3, 5, 5, 6, 9, 2, 4, 3, 2, 1, 5, 3, 4, 6, 7, 8, 9, 4, 3])); // 49
