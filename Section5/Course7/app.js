//static properties and methods 
//static properties and methods allow you to add properties and methods to classes which are not accessed instance of the class .
//we call it directly on the class without the new keyword.
var NewDepartment = /** @class */ (function () {
    function NewDepartment() {
    }
    //static method
    NewDepartment.createEmployee = function (name) {
        return { name: name };
    };
    NewDepartment.finacialyear = '2021';
    return NewDepartment;
}());
var employee1 = NewDepartment.createEmployee('Kaviya');
console.log("employee1", employee1, NewDepartment.finacialyear);
