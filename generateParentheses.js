/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

const parentheses = (n) => {
  let arr = [];
  const buildString = (count = n, open = 0, string = '') => {
    if (count === 0) {
      while (open > 0) {
        string += ')';
        open--;
      }
      arr.push(string);
      return;
    } else {
      if (open > 0) {
        buildString(count - 1, open + 1, string + '(');
        buildString(count, open - 1, string + ')');
      } else {
        buildString(count - 1, open + 1, string + '(');
      }
    }
  };
  buildString();
  return arr;
};

console.log(parentheses(3));
