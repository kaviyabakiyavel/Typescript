//Extending interface
//we can inherit the interface as well 
//in class we can able to inhert from one class 

import { getParsedCommandLineOfConfigFile } from "typescript";

//but interface we can able to inhert from multiple interface 
interface Named{
 readonly name : string;
}
interface Employeedetails{
    designation: string;
}
//we can inhert muliple interface
interface Greetable extends Named,Employeedetails{
    greet(phrase : string) : void ;
}
class Persondetails implements Greetable{
    name : string;
    designation =' software engineer';
    age = 30 ;
    constructor(n: string){
        this.name = n;
    }
    greet(phrase:string){
        console.log("HI I AM" , this.name)
    }
}
let user3 = new Persondetails('kaviya')
console.log("user3",user3)