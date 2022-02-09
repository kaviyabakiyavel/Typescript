//implement decorators in class properties 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//in target bascially we are getting prototype of the instance
function Log(target, propertyName) {
    console.log("target", target);
    console.log("propertyName", propertyName);
}
var product = /** @class */ (function () {
    function product(title, price) {
        this.title = title;
        this._price = price;
    }
    __decorate([
        Log
    ], product.prototype, "title");
    return product;
}());
var product1 = new product('New Product', 12);
console.log(product1);
