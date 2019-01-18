// https://leetcode.com/problems/reverse-string/
// # written by: thanhvan
 
var reverseString = function(str) {
    var arrayofchars= str.split("");
    var StrtoArray= arrayofchars.reverse();
    var newstr= StrtoArray.join("");
    return newstr;
}
reverseString("hello");