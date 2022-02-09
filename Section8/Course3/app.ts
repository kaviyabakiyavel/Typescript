//Creating Simple angular Component Decorator in the TypeScript
function Logger(LogString: string){
    return function (constructor: Function){
        console.log(LogString);
        console.log(constructor);
    }
}
function withTemplate(template: string , hookId: string){
  return function(constructor: any){
     const hookEl = document.getElementById(hookId);
     const data = new constructor();
     if(hookEl){
         hookEl.innerHTML = template;
         //directly added the text into app id 
         //hookEl.textContent = data.name


         //now instead of hai we are going to replace with name inside h1 tag
         //why we used exclamatory mark may be not be null
         hookEl.querySelector('h1')!.textContent = data.name;
     }
  };
}
@withTemplate('<h1>Hai</h1>','app') //inside app id we are inserting html tage <h1>Hai<h1>
class Persondecorator{
    name = 'Leela';
    constructor(){
        console.log('creaing Object...');
    }
}

const person5 = new Persondecorator();
console.log(person5);