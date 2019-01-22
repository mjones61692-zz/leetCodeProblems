const monteCarloPi = function(n) {
  let inside = 0;
  let total = 0;
  while (total < n) {
    let x = 2 * (Math.random() - 0.5);
    let y = 2 * (Math.random() - 0.5);
    if (x ** 2 + y ** 2 <= 1) {
      inside++;
    }
    total++;
  }
  return inside / total * 4;
};

console.log(monteCarloPi(100000000));
