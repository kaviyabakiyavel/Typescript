//we can able to overide the methods from the base class
//id changing from private to protected
// class Course8Department{
//     constructor(protected readonly id: string, public name: string){

//     }
//     describe(this: Course8Department){
//       console.log(`Department (${this.id}): ${this.name}`);
//     }
// }

// class IT_Department extends Course8Department{

// }
// class Accounting_Department extends Course8Department{
//   describe(){
//       console.log("Accounting department " + this.id)
//   }
// }
// const accounting = new Accounting_Department('d2','');
// accounting.describe();



//By using abstract keyword can override the methods 

//https://www.tutorialsteacher.com/typescript/data-modifiers
//TypeScript - Data Modifiers 
//In object oriented programming the concept of encapsulation is used to make class members public or private 
// a class can control the visibility of its data members. Thisis done by using access modifiers
//1)public By default all the members of a class in typescript are public.All the bublic members can be accessed without any restrictions .
//2)private  The private access modifier ensures that class members are visible only to the class 
//3)protected - The protected access modifier is similar to the private access modifier
type OutputType = {
  name:string;
  age : number
}
abstract class Course8Department{
  constructor(protected readonly id: string, public name: string){

  }
  //by using abstract keyword only can initalise in parent - in  base class can write the functionality 
  //void means not returning anthing 
  abstract describe(this: Course8Department) : void;
  //abstract describe(this: Course8Department): OutputType;
  // abstract describe(this: Course8Department){
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }
}

class IT_Department extends Course8Department{
  describe(){
    console.log('IT Department - ID:  ' + this.id)
    //return {name : 'kaviya' , age: 1}
  }
}
class Accounting_Department extends Course8Department{
describe(){
    console.log("Accounting department - ID " + this.id)
}
}
const accounting = new Accounting_Department('d2','');
accounting.describe();