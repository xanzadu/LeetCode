/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    let n = strs.length;
    if (n === 1) return strs[0];
    let j = 0;
    let i  = 0;
    while(strs[i][j] && strs[i+1] && strs[i][j] === strs[i+1][j]) {
        if (i === n - 2) {
            result += strs[i][j];
            j++;
            i = 0;
        } else {
            i++;
        }
    }
    return result;
};