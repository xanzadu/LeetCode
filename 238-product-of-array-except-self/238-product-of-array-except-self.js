/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    let currentProd = 1;
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = currentProd;
        currentProd *= nums[i];
    }
    currentProd = 1;
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= currentProd;
        currentProd *= nums[j];
    }
    return result;
    
};