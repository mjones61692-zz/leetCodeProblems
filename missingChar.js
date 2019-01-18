const missingChar = function(string) {
  var char;
  var count = 0;
  for (var x = 0; x < string.length; x++) {
    if (count === 0) {
      char = string[x];
      count++;
    } else if (char === string[x]) {
      count++;
      if (count === 3) {
        count = 0;
      }
    } else {
      return char;
    }
  }
}

console.log(missingChar('11122233344455666')); // 5

