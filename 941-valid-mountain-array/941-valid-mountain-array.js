/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let n = arr.length;
    let switchTag = false;
    if (n <= 2) {
        return false;
    }
    if (arr[0] >= arr[1]) {
        return false;
    }
    
    for (let i = 2; i < n; i++) {
        if (arr[i] === arr[i-1]) {
            return false;
        }
        if (arr[i] < arr[i-1] && !switchTag) {
            switchTag = true;
        }
        if (arr[i] > arr[i-1] && switchTag) {
            return false;    
        }    
    }
        return switchTag;
};