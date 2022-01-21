/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let k = 0;
    let maxLength = 0;
    for(i = 0; i < s.length; i++) {
        for (j = k; j < i; j++) {
            if (s[i] === s[j]) {
                k = j + 1;
                break;
            }
        }
        if (i - k + 1 > maxLength) {
            maxLength = i - k + 1;
        }
    }
    return maxLength;
};