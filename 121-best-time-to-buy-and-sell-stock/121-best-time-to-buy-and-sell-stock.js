/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let n = prices.length;
    let buy = prices[0];
    for (let i = 1; i < n; i++) {
       buy = prices[i] < buy ? prices[i] : buy;
       let profit = prices[i] - buy;
        result = profit > result ? profit : result;
    }
    return result;
};