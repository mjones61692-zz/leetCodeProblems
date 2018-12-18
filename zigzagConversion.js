/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a 
given number of rows like this:

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Ex1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Ex2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

*/

function zigzagConversion(string, rows) {
  if (rows === 1) {
    return string;
  }
  // row = 0;
  let row = 0;
  // output = ''
  let output = '';
  // len = string.length
  let len = string.length;
  // while output.length < len
  while (output.length < len) {
    // i = 0
    let i = 0;
    // while i < len
    while (i < len) {
      // i += row
      i += row;
      if (row !== rows - 1) {
        // output += string[i]
        string[i] ? output += string[i] : output = output;
      }
      // i += (rows - row - 1) * 2
      i += (rows - row - 1) * 2;
      if (row !== 0) {
        // output += string[i]
        string[i] ? output += string[i] : output = output;
      }
      // i += row
      i += row;
    }
    // row++
    row++;
  }
  //return output
  return output;
};

console.log(zigzagConversion('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
console.log(zigzagConversion('PAYPALISHIRING', 2)); // PINALSIGYAHRPI
