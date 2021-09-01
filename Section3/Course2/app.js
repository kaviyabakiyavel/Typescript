// const add = (a : number , b: number) => {
//     return a + b ;
// }
// console.log(add(2,5));
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//or 
//default parameter 
var addition = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(addition(5));
// default parameter pass to first element in the argument
//spread operator
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    name: 'Max',
    age: 30
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
//Rest operator
var listofnumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addnumbers = listofnumbers(5, 10, 2, 3.7);
console.log(addnumbers);
