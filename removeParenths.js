const removeParenths = (string) => {
  let count = 0;
  let open = 0;
  for (let letter of string) {
    // let letter = string[x];
    if (letter === '(') {
      open++;
    } else {
      if (open === 0) {
        count++;
      } else {
        open--;
      }
    }
  }
  return count + open;
}

console.log(removeParenths(')(')); // 2
console.log(removeParenths('()())()')); // 1
console.log(removeParenths('()()()')); // 0