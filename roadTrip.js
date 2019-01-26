function trip(gas, cost) {
  let len = gas.length;
  for (let x = 0; x < len; x++) {
    let tank = 0;
    let i = x;
    while (true) {
      tank += gas[i];
      tank -= cost[i];
      i++;
      if (tank < 0) break;
      if (i === len) i = 0;
      if (i === x) return x;
    }
  }
  return -1;
}

console.log(trip([1, 2], [2, 1])); // 1
