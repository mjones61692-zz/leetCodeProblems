// radix sorting algorithm

const getDigit = (num, n) => {
  let digit;
  while (n-- > 0) {
    digit = num % 10;
    num = Math.floor(num / 10);
  }
  return digit;
};

const radixSort = (arr) => {
  let digits = Math.max.apply(Math, arr).toString().length;
  for (let x = 1; x <= digits; x++) {
    let bucket = {};
    arr.forEach((element) => {
      let digit = getDigit(element, x);
      bucket[digit] = bucket[digit] || [];
      bucket[digit].push(element);
    });
    let index = 0;
    for (let i = 0; i < 10; i++) {
      if (bucket[i]) {
        bucket[i].forEach((element) => {
          arr[index++] = element;
        })
      }
    }
  }
  return arr;
};

console.log(radixSort([3, 2, 4, 5, 1])); // [1, 2, 3, 4, 5]
console.log(radixSort([101, 203, 5, 87, 76, 48])); // [5, 48, 76, 87, 101, 203]
