const map = {
  '2': ['a', 'b' ,'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

const mapNumToString = (string) => {
  let length = string.length;
  let permutations = [];
  const build = (substring, index) => {
    if (index === length) {
      permutations.push(substring);
    } else {
      for (let letter of map[string[index]]) {
        build(substring + letter, index + 1);
      }
    }
  }
  build('', 0);
  return permutations;
}

console.log(mapNumToString('23')); // [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"]
console.log(mapNumToString('234'));
