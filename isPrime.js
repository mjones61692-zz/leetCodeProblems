const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(num / i); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
