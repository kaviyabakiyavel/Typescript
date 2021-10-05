//Classes and interfaces , inheritance
//what is object oriented programming(oop)?

import { servicesVersion } from "typescript"

//work with (real-life)entities in your code
//eg:
//1)product list 
//renders a list of products which were fetched from a server (database)
//object holds rendering + fetcing logic

//2) product 
//renders details about a product and allows addition to cart
//object holds rendering + cart-adding logic

//3) shopping cart
//renders cart products and total and allows user to order them
//object holds rendering + ordering (server communication)logic

//classes & instances 
//1 objects 
//The things yu work with in code
//Instances of classes =based on classes
//Class-based creation is an alternatve to using object literals.

//2 classes - Blueprints for objects 
//Define how objects look like , which properties and methods they have.
//classes make creation of multiple similar objects much easier

class Department{
    name : string;
    constructor(n: string){
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);