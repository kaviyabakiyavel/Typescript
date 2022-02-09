//Adding multiple decorators in typescript
//decorator are excutng from bottom to top
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(Logger) {
    return function (constructor) {
        console.log(Logger);
    };
}
function Component(template, hookId) {
    return function (constructor) {
        console.log('Component function');
        var hookEl = document.getElementById(hookId);
        var data = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = data.name;
        }
    };
}
var Persondec = /** @class */ (function () {
    function Persondec() {
        this.name = 'Leela';
        console.log('creating Object...');
    }
    Persondec = __decorate([
        Logger('Logger function'),
        Component('<h1>Hai</h1>', 'app')
    ], Persondec);
    return Persondec;
}());
var person6 = new Persondec();
console.log(person6);
