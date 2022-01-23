/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const number = x.toString();
    let reverseNumber = '';
    for (let i = number.length-1; i >= 0; i--) {
         reverseNumber += number[i];
    }
    if (reverseNumber === number) {
        return true;
    }
    return false;
};