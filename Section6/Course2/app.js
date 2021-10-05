//Constructor function and this keyword
//refer to a class property or method from the inside of the class. (by using this keyword)
var Depatment = /** @class */ (function () {
    function Depatment(n) {
        this.name = n;
    }
    Depatment.prototype.describe = function () {
        //this console refer to window object 
        console.log('Department' + name);
        //this console refers to inside class properties (by using this keyword)
        console.log('Department' + this.name);
    };
    return Depatment;
}());
var accountingdet = new Depatment('Accounting');
accountingdet.describe();
//creating dumbby object not refering to any class , so when it calls describe method , it wil print "undefined" becuase {this} not pointing to any object  
var accountingCopy = { describe: accountingdet.describe };
accountingCopy.describe();
