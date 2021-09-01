"use strict";
//unknown type
//let userInput : unknown;
//when i change to any 
// let userInput : any; //line no 8 it wont throw any error
// let userName : string
// userInput = 5;
// userInput = 'Max';
// userName = userInput; //username is string if we assign userInput to userName throws error 
//or
var userInput;
var userName = "Max";
if (typeof userInput === 'string') {
    userName = userInput;
}
