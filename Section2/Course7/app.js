"use strict";
//function can except two different kinds f value(number,string) - union can help in this secnario
function combaine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combainedAges = combaine(30, 26);
console.log(combainedAges);
var combinedNames = combaine('kaviya', 'bakiyavel');
console.log(combainedAges);
