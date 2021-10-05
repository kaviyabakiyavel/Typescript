//working with decorator factories
//customized decorator function 

function Logger(logString: string){
    return function(constructor: Function){
        console.log('Logging...');
        console.log(constructor);
    };
}
@Logger('LOGGING - PERSON')
class Person2{
    name = 'Max';
    constructor(){
        console.log('creating person object...');
    }
}