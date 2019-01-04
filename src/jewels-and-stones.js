var numJewelsInStones = function(J, S) {
       var result = 0;
        var jlen = J.length;
        var slen = S.length;
        for (var i = 0; i < slen; i++) {
            for (var j = 0; j < jlen; j++) {
                if (S[i] == J[j]) {
                    result++;
                   
                }
            }
        }
        return result;
};