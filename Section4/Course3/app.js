//shorthand initialization
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id : string;
        // private name : string;
        this.employees = []; //private can only access inside class object
        // this.id = id;
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department:' + this.name + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.addEmployee('Raj');
accounting.addEmployee('Ravi');
accounting.name = 'new name'; //public so it wont throw error
accounting.describe();
accounting.printEmployeeInformation();
