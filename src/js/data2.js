var data2 = {
        data1 : "a",
        data2 : "b"

    };

/**
Como rompe...
**/
function joinData() {
    "use strict";
    var result = data2.data1 + data2.data2;
    return result;
}