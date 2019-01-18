//https://leetcode.com/problems/reverse-words-in-a-string-iii/
// written by: thanh van
var reverseWords = function(s) {
    var arr = s.split(' ');
    var Arr = [];
    for(let i = 0; i<arr.length; i++){
        Arr.push(arr[i].split('').reverse().join(''));  
    }
    var str = Arr.join(' ');
    return str;
};