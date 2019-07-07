let maxProfit = (prices) => {
  if (prices.length < 2) {
    return -1;
  }

  let maxDiff = -1;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let buyPrice = prices[i];
      let sellPrice = prices[j];
      maxDiff = sellPrice - buyPrice > maxDiff ? sellPrice - buyPrice : maxDiff;
    }
  }
  return maxDiff;
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]));
console.log(maxProfit([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
