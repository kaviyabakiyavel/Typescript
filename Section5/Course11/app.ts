//interfaces with classes
//why interfaace is needed ?
//instead we can use type 

//eg: 

// type Person ={
//     name : string;
//     age : number;
//     greet(phrase : string): void;
// }

//then why we need interfface -> interface only define the object structure but in type we can define object , uniion type so on .
//interface similar like abstract class , bascially class will take the inerface structre and return s same set sof output .
//difference between abstract vs interface

// interface PInterface{
//     name : string;
//     age : number;
//     greet(phrase : string): void;
// }
// class Person implements PInterface{
//     name : string;
//     age = 30;
//     constructor(n : string){
//         this.name = n;
//     }
//     greet(phrase:string){
//         console.log(phrase = ' ' + this.name);
//     }
// }
// let user1 : PInterface;
// user1 = new Person('kaviya')
// user1.greet('Hi there - I am');
// console.log("user1",user1)