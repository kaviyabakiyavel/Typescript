//interfaces with classes
//why interfaace is needed ?
//instead we can use type 
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase = ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('kaviya');
user1.greet('Hi there - I am');
console.log("user1", user1);
