/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let resultObj = {};
    const breakPoint = nums.length/2;
    
    for (let i = 0; i < nums.length; i++) {
        if (resultObj[nums[i]] === undefined) {
            resultObj[nums[i]] = 0;
        }
        resultObj[nums[i]]++;
        if (resultObj[nums[i]] > breakPoint) {
            return nums[i];
        }
    }
};