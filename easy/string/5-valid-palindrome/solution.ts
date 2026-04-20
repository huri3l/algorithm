/*
* Valid Palindrome
* 
* Time Complexity: O(n)
* Space Complexity: O(1)
* 
* Create two pointers (left and right), loop while left < right and skip non alphanumeric checks
*   by increasing/decreasing the pointers.
* Validate if current left is different than current right. If yes, immediately return false
* Update pointers at each iteration.
* Return true as fallback.
*/
export function solution(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left])) {
      left++;
    }

    while (left < right && !/[a-z0-9]/i.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}