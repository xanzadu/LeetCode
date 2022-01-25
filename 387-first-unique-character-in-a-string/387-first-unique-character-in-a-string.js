/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (obj[char] === undefined) {
            obj[char] = i;
        } else {
            obj[char] = Infinity;
        }
    }
   const array = Object.keys(obj);
   let result = Infinity;
   for (let j = 0; j < array.length; j++) {
       if (obj[array[j]] < result) {
           result = obj[array[j]];
       }
   }
    return result === Infinity ? -1 : result;
};