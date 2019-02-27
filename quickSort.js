const quickSort = function(array) {
  const sort = function(start, end) {
    if (start === end) {
      return;
    }
    let pointer = start;
    let p1 = start + 1;
    let p2 = end;
    while (p1 <= p2) {
      if (array[p1] > array[pointer] && array[p2] < array[pointer]) {
        swap(array, p1, p2);
        p1++;
        p2--;
      } else {
        if (array[p1] <= array[pointer]) {
          p1++;
        }
        if (array[p2] >= array[pointer]) {
          p2--;
        }
      }
    }
    swap(array, pointer, p2);
    sort(start, p2);
    sort(p1, end);
  };
  sort(0, array.length - 1);
  return array;
};

const swap = function(array, i1, i2) {
  let temp = array[i2];
  array[i2] = array[i1];
  array[i1] = temp;
}

let array = [7, 5, 10, 2, 8, 3, 1, 9, 4, 6, 2, 2, 3, 4, 5, 2, 1, 4, 23, 4, 1, 2, 321, 12];
console.log(quickSort(array)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
