var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Creating Simple angular Component Decorator in the TypeScript
function Logger(LogString) {
    return function (constructor) {
        console.log(LogString);
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var data = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            //directly added the text into app id 
            //hookEl.textContent = data.name
            //now instead of hai we are going to replace with name inside h1 tag
            //why we used exclamatory mark may be not be null
            hookEl.querySelector('h1').textContent = data.name;
        }
    };
}
var Persondecorator = /** @class */ (function () {
    function Persondecorator() {
        this.name = 'Leela';
        console.log('creaing Object...');
    }
    Persondecorator = __decorate([
        withTemplate('<h1>Hai</h1>', 'app') //inside app id we are inserting html tage <h1>Hai<h1>
    ], Persondecorator);
    return Persondecorator;
}());
var person5 = new Persondecorator();
console.log(person5);
