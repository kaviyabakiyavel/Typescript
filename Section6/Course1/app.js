//classes and interfaces
//what is objectt oriented programming (oop)?
//objects -> ressemble real life objects  and split the code into logical pieces 
//1)productlist
//Renders a list of products which were fetched from a server(database)
//This object holds fetching + rendering logic
//2)product 
//Rendering details about a product and allows addition to cart 
// object holds rendering + adding card logic
//3)shoppingcart
//renders cart products and total and allows user to order them
//object holds rendering + ordering(server communication) logic
//Object -
//The things you work with in code 
//class makes it easier to create multiple object and structure by using object literals.
//Classes
//blueprint for object 
//define how objects look like , which properties and methods they have 
//we could use object to manage the data for the different departments (properties / methods)
var DepartmentClass = /** @class */ (function () {
    //we can initalise name:string kaviya but we initalise value inside constructor
    function DepartmentClass(n) {
        this.name = n;
    }
    return DepartmentClass;
}());
//create new object based on class blueprint
var accountingobj = new DepartmentClass('Accounting');
console.log("accountingobj", accountingobj);
