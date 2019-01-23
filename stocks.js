const stocks = function(prices) {
  let minBuy = null;
  let maxProfit = -Infinity;
  prices.forEach((price) => {
    if (minBuy === null || price < minBuy) {
      minBuy = price;
    }
    if (price - minBuy > maxProfit) {
      maxProfit = price - minBuy;
    }
  });
  return maxProfit;
}

let prices = [10, 7, 5, 8, 11, 9];
console.log(stocks(prices)); // 6
