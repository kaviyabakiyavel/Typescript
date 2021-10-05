//Decorators - Module Content
//what?
//Decorator usage
//examples

// decorator bascially extends functionality of the class is called decorators.
// decortor is nothing but extending feature of the class
// First class Decorator
//when class initalized itself logger function will excute
function Logger(constructor: Function){
    console.log('Logging...');
    console.log("constructor",constructor)
}
@Logger
class Person1{
    name = 'kaviya';
    constructor(){
        console.log('creating person object...');
    }
}
const pers = new Person1();
console.log("pers",pers);