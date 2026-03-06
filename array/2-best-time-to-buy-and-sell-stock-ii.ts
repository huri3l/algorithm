/**
 * Best Time to Buy and Sell Stock II
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 */

/**
 * Personal Solution
 * Time Complexity: O(nˆ2)
 * Space Complexity: O(1)
 *
 * Starting from the first day, if there's a higher price on the days ahead, buy today and sell on the most profitable day ahead.
 */
function maxProfit(prices: number[]): number {
  let profit = 0;

  outer: for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        if (j === prices.length - 1) {
          profit += prices[j] - prices[i];
          break outer;
        }

        if (prices[j] > prices[j + 1]) {
          profit += prices[j] - prices[i];
          i = j + 1;
        }
      }
    }
  }

  return profit;
}

const result = maxProfit([7, 1, 5, 3, 6, 4]);

/**
 * Solution 1: Greedy Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Starting from the second day, if the stock price is higher than the previous day, buy on the previous day and sell on the current day to make a profit.
 * If the stock price is lower than the previous day, do not buy or sell.
 * In other words, buy and sell on all rising trading days, and do not trade on all falling trading days. The final profit will be the maximum.
 */
function maxProfit2(prices: number[]): number {
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
}

/**
 * Solution 1: Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * We define f[i][j] as the maximum profit after trading on the $i$th day, where j indicates whether we currently hold the stock. When holding the stock,
 * j=0, and when not holding the stock, j=1.
 * The initial state is f[0][0]=−prices[0], and all other states are 0.
 * If we currently hold the stock, it may be that we held the stock the day before and do nothing today, i.e.,
 * f[i][0] = max(f[i-1][0], f[i-1][1] - prices[i])
 * If we currently do not hold the stock, it may be that we did not hold the stock the day before and do nothing today, i.e.,
 * f[i][1] = max(f[i-1][1], f[i-1][0] + prices[i])
 * The final answer is f[n-1][1], where n is the length of the prices array.
 *
 * We can optimize the space complexity to O(1) by only keeping track of the previous day's states, since the current day's states only depend on the previous day's states.
 * No implementation is provided here since the greedy algorithm is more efficient and easier to understand.
 */
