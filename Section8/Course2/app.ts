//factory decorators 
//passing custom defined data to this function
//creating decorator with the decorator factories
function Logger(LogString: string){
    return function Logger(constructor: Function){
        console.log(LogString);
        console.log(constructor);
    };
}

@Logger('Logging for the class Person')
class Personfactorydec{
    name = 'Leela';
    constructor(){
        console.log('creating Object....');
    }
}

const person3 = new Personfactorydec();
console.log(person3);