function angle(hour, min) {
  let angle1 = hour / 12 * 360;
  let angle2 = min / 60 * 360;
  let diff = Math.abs(angle1 - angle2);
  return diff >= 180 ? 360 - diff : diff;
}

console.log(angle(1, 30)); // 150
console.log(angle(11, 30)); // 150
console.log(angle(3, 0)); // 90
console.log(angle(9, 0)); // 90