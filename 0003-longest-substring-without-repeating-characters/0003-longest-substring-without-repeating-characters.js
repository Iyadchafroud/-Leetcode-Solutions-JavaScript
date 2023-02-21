/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // set to store encountered characters
  const encountered = new Set();
  // variable to store the maximum length
  let maxLength = 0;
  // start and end indices of the current substring
  let start = 0;
  let end = 0;
  while (end < s.length) {
    // if the current character has not been encountered before
    if (!encountered.has(s[end])) {
      // add it to the set and increment the end index
      encountered.add(s[end]);
      end++;
      // update the maximum length if necessary
      maxLength = Math.max(maxLength, end - start);
    }
    // if the current character has been encountered before
    else {
      // remove the start character from the set and increment the start index
      encountered.delete(s[start]);
      start++;
    }
  }
  return maxLength;
}
