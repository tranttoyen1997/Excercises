//https://leetcode.com/problems/ugly-number/submissions/
// written by: thanh van
var isUgly = function(num) {
     if (num == 0) return false
  var n
  while (num != 1) {
    n = num / 5
    if (Math.floor(n) == n) {
      num = n
      continue
    }

    n = num / 3
    if (Math.floor(n) == n) {
      num = n
      continue
    }

    n = num / 2
    if (Math.floor(n) == n) {
      num = n
      continue
    }

    return false
  }

  return true
};
