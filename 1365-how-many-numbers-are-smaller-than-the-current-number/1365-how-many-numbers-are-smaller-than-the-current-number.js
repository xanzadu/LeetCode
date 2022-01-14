/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(num => {
        return nums.reduce((acc, reduceNum) => acc += reduceNum < num ? 1 : 0, 0)
    })
};