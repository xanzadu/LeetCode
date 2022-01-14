/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((acc, num) => (
        acc += num.toString().length % 2 === 0 ? 1 : 0   
    ),0) 
};