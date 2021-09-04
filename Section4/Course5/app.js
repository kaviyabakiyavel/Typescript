//Inheritance
//eg : We have IT department, HR department, Accounting department
//each department share the same basic information 
//eg : ID,name,employee - but few shares different details Department : IT/HR/Accounting
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//course 5 : we can also override methods or properties from ur base class 
//protected key word is we can use the property from other class as well
//can able to access outside but it can able to access inside of classes that extend the base class
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
//By using extends keyword we can inherts the properties from the Department
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Account') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment;
}(Department));
//const accounting = new Department('Accounting');
//const accounting = new ITDepartment('d1','Accounting'); since IT department class 
var IT = new ITDepartment('d1', ['Max']);
IT.addEmployee('Max');
IT.addEmployee('Manu');
IT.name = 'new name'; //public so it wont throw error
IT.describe();
IT.printEmployeeInformation();
console.log("IT", IT);
var Accounting = new AccountingDepartment('d2', []);
Accounting.addReport('Something went wrong...');
Accounting.printReports();
console.log("Accounting", Accounting);
