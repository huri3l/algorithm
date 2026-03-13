/**
 * Best Time to Buy and Sell Stock II - Alternative Solutions
 */

/**
 * Approach 1: Personal Brute Force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * Starting from the first day, find the highest price in days ahead.
 * Buy today and sell on the highest day. Repeat from the next day.
 * Not optimal but demonstrates a valid approach.
 */
export function personalBruteForce(prices: number[]): number {
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
