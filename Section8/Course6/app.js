//Implement Decorators for the Accessor, Methods, and Parameters for the class in TypeScript.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(target, propertyName) {
    console.log("property Decorator");
    console.log("target", target);
    console.log("propertyName", propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
}
function Log4(target, name, position) {
    console.log("parameter Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("position", position);
}
var Product = /** @class */ (function () {
    function Product(title, price) {
        this.title = title;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (value) {
            if (value > 0) {
                this._price = value;
            }
            else {
                throw new Error('Price should be positive number');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * tax;
    };
    __decorate([
        Log //decorator for property
    ], Product.prototype, "title");
    __decorate([
        Log2 //decorator for accessor
    ], Product.prototype, "price");
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
