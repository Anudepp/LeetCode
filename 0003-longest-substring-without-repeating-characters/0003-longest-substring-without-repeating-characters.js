/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    let charSet = new Set();

    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            max = Math.max(max, charSet.size);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }

    return max;
};