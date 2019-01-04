# url: to the problem
# https://leetcode.com/problems/sum-of-two-integers/submissions/
# written by: toyen

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b==0){
        return a;
    }
    else {
        return getSum(a ^ b, (a & b) << 1)
    }
};