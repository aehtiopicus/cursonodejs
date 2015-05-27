
var data = {
        data1 : "a",
        data2 : "b"

    };

/**
*add coments funca muy bien
*/
function cow() {
    "use strict";
    return "";
}
/**
Como rompe...
**/
function joinData() {
    "use strict";
    var result = data.data1 + data.data2;
    if (result === "ab") {
        cow();
    }
}

