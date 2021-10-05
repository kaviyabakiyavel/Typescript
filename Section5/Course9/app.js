//singletons and private constructor
//Singleton is a object oriented concepts 
//singleton means one instances as to create for the class
//when you put private for the constructor -> outside ppl cant create object for this constructor
//when singleton pattern will use - whenever your application needs singleton or one instance
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
var Department1 = /** @class */ (function () {
    function Department1(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department1.finacialYear = 2020;
    return Department1;
}());
var AccoutingDepartment = /** @class */ (function (_super) {
    __extends(AccoutingDepartment, _super);
    function AccoutingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastRecord = reports[0];
        return _this;
    }
    //static method we can access outside 
    //in statiic this refers to the clsssName (this.instance) / (AccoutingDepartment.instance)
    //If you call (this.describe) throws error because only static method and static proprties can be accessible 
    AccoutingDepartment.getInstance = function () {
        if (AccoutingDepartment.instance) {
            return this.instance;
        }
        //is there is no instance
        this.instance = new AccoutingDepartment('d2', []);
        return this.instance;
    };
    return AccoutingDepartment;
}(Department1));
//const accounting =  new AccoutingDepartment ('d2' , [])
var accounting1 = AccoutingDepartment.getInstance();
var accounting2 = AccoutingDepartment.getInstance();
console.log("accounting1", accounting1);
console.log("accounting2", accounting2);
