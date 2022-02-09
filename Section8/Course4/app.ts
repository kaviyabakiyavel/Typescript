//Adding multiple decorators in typescript
//decorator are excutng from bottom to top

function Logger(Logger : string){
    return function (constructor: Function){
        console.log(Logger);
    }
}

function Component(template : string , hookId : string){
    return function(constructor: any){
        console.log('Component function');
        const hookEl = document.getElementById(hookId);
        const data = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = data.name;
        }
    }
}

@Logger('Logger function')
@Component('<h1>Hai</h1>','app')
class Persondec{
    name = 'Leela';
    constructor(){
        console.log('creating Object...');
    }
}
const person6 = new Persondec();
console.log(person6);