//optional parameters and properties
//we can set optional parameter in interface and classes 
// name? : string  (optional parameter)
var Persondet = /** @class */ (function () {
    function Persondet(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Persondet.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Persondet;
}());
var user5;
user5 = new Persondet('Max');
user5.greet('HI I AM');
console.log("user5", user5);
