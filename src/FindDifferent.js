//https://leetcode.com/problems/find-the-difference/
// written by: thanh van
var findTheDifference = function(s, t) {
    var sorted = s.split('').sort();
    var sorted2 = t.split('').sort()
for(var i = 0; i< sorted2.length; i++){
    if(i == sorted2.length || sorted[i] != sorted2[i]){
        return sorted2[i];
    
    }
}
};