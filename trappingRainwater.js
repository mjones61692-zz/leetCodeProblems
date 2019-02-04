// left right pass

// const trappingRainwater = function(height) {
//   let left = [];
//   let right = [];
//   let count = 0;
//   let len = height.length - 1;
//   for (i = 0; i <= len; i++) {
//     if (i === 0) {
//       left[i] = height[i];
//       right[len] = height[len];
//     } else {
//       left[i] = Math.max(left[i - 1], height[i]);
//       right[len - i] = Math.max(right[len - i + 1], height[len - i]);
//     }
//   }
//   for (i = 0; i <= len; i++) {
//     count += Math.max(0, Math.min(left[i], right[i]) - height[i]);
//   }
//   return count;
// }

// stack

const trappingRainwater = function(height) {
  
}

console.log(trappingRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
