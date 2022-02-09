/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(A) {
  var prev = 0;
  var max = -Infinity;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}