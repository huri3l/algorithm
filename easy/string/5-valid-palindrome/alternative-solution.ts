/*
* Valid Palindrome
* 
* Time Complexity: O(n)
* Space Complexity: O(n)
* 
* Creates a sanitized version of the string by lowercasing and removing all non alphanumeric chars
* Reverse that string in another variable and compare if they are equal.
*/
export function personalSolution(s: string): boolean {
  const sanitizedString = s.toLowerCase().trim().replace(/[^a-z0-9]/gi, '')

  const reverseString = sanitizedString.split("").reverse().join("")
  
  return sanitizedString === reverseString
};