var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//factory decorators 
//custom defined data to this function
function Logger(LogString) {
    return function Logger(constructor) {
        console.log(LogString);
        console.log(constructor);
    };
}
var Personfactorydec = /** @class */ (function () {
    function Personfactorydec() {
        this.name = 'Leela';
        console.log('creating Object....');
    }
    Personfactorydec = __decorate([
        Logger('Logging for the class Person')
    ], Personfactorydec);
    return Personfactorydec;
}());
var person3 = new Personfactorydec();
console.log(person);
