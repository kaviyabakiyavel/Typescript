//readonly interface properties 
//once object initalized cant able to change the readonly properties 
//if read only mentioned inside interface -> onceimplement inside the class -> and trying to change value -> it will throws error

interface PInterface {
    readonly fname : string;
    age : number ;
    greet (phrase : string) : void; 
}
class Person implements PInterface{
  fname : string;
  age = 30;
  constructor(n:string){
      this.fname = n ;
  }
  greet ( phrase : string){
      console.log(phrase + ' ' + this.fname);
  }
}
let user2 : PInterface;
user2 = new Person('kaviya')
//user2.fname = 'Bakiyavel'; throws error because its readonly properties
user2.greet('Hi there - I am');
console.log(user2)