//what is decorator it is one of the most powerful features offered 
//allows to extends the functionality/feature of the classes and methods in clean and declarative fashion
//decorator function
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//now im going to extends this functionality by using decorator or also called meta programming
//decorator is nothing but function 
//logger will except constructor of the argument 
function Logger(constructor) {
    console.log('logging the data');
    console.log(constructor);
}
var personDetails = /** @class */ (function () {
    function personDetails() {
        this.name = 'Leela';
        console.log('creating object....');
    }
    personDetails = __decorate([
        Logger
    ], personDetails);
    return personDetails;
}());
var person1 = new personDetails();
console.log(person1);
//when we inspect function is excuted before the instance was created 
//when i command the person1 also logger function will excute first
