/**
 * Best Time to Buy and Sell Stock II - Greedy Solution (Optimal)
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Greedy Algorithm: On every rising trading day (price[i] > price[i-1]),
 * we buy on day i-1 and sell on day i to capture profit.
 * On falling days, we do nothing.
 * This captures all possible gains.
 */
export function solution(prices: number[]): number {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    maxProfit += Math.max(0, prices[i] - prices[i - 1]);
  }
  return maxProfit;
}
