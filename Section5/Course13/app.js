"use strict";
//Extending interface
//we can inherit the interface as well 
//in class we can able to inhert from one class 
exports.__esModule = true;
var Persondetails = /** @class */ (function () {
    function Persondetails(n) {
        this.designation = ' software engineer';
        this.age = 30;
        this.name = n;
    }
    Persondetails.prototype.greet = function (phrase) {
        console.log("HI I AM", this.name);
    };
    return Persondetails;
}());
var user3 = new Persondetails('kaviya');
console.log("user3", user3);
