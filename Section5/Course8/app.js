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
//we can able to overide the methods from the base class
//id changing from private to protected
var Course8Department = /** @class */ (function () {
    function Course8Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Course8Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    return Course8Department;
}());
var IT_Department = /** @class */ (function (_super) {
    __extends(IT_Department, _super);
    function IT_Department() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IT_Department;
}(Course8Department));
var Accounting_Department = /** @class */ (function (_super) {
    __extends(Accounting_Department, _super);
    function Accounting_Department() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accounting_Department.prototype.describe = function () {
        console.log("Accounting department " + this.id);
    };
    return Accounting_Department;
}(Course8Department));
var accounting = new Accounting_Department('d2', '');
accounting.describe();
