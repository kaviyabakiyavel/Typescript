"use strict";
//Function type and callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result); //callback function //callback holds only one argument
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
