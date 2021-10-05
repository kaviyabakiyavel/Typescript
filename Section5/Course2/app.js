//constructor and this keyword
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = []; //private can only access inside class object
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department:' + this.name);
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
//add employee by using name not only method
//accounting.employees[2] = 'Andy'; //throws error bcz of private 
accounting.name = 'new name'; //public so it wont throw error
accounting.describe();
accounting.printEmployeeInformation();
//typescript introduce this feature private and public
