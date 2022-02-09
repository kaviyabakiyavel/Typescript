//what is decorator it is one of the most powerful features offered 
//allows to extends the functionality/feature of the classes and methods in clean and declarative fashion
//decorator function

//now im going to extends this functionality by using decorator or also called meta programming
//decorator is nothing but function 

//logger will except constructor of the argument 
function Logger(constructor: Function){
    console.log('logging the data');
    console.log(constructor)
}

@Logger
class personDetails {
    name = 'Leela';
    constructor(){
        console.log('creating object....');
    }
}
const person1 = new personDetails();
console.log(person1);

//when we inspect function is excuted before the instance was created 
//when i command the person1 also logger function will excute first