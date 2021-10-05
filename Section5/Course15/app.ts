//optional parameters and properties
//we can set optional parameter in interface and classes 
// name? : string  (optional parameter)

interface Named{
    readonly name?: string;
    outputName?: string; 
    //if optional parameter is removed it will throw error 
    //when we use optional parameter we need to write lot of conditional check in code if-else 
}
interface Greetable extends Named{
    greet(phrase: string): void;
}
class Persondet implements Named{
    name?: string;
    age = 30;
    //constructor(n:'') //initialized empty object
    constructor(n?: string){
        if(n){
            this.name = n;
        }
    }
    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else{
            console.log("Hi");
        }
        
    }
}
let user5 : Greetable;
user5 = new Persondet('kaviya');
user5.greet('HI I AM');
console.log("user5",user5)

//when you complied and see js code interface can't see its dumbed bascially
