
// //constructor and this keyword
// class Department{
//     public name : string; //public property can be accessible outside of the class 
//     private employees : string[] = []; //private can only access inside class object
//     constructor(n: string){
//         this.name = n;
//     }
//     describe(this: Department){
//         console.log('Department:'+ this.name);
//     }
//     addEmployee(employee : string){
//       this.employees.push(employee); 
//     }
//     printEmployeeInformation(){
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// accounting.addEmployee('Raj');
// accounting.addEmployee('Ravi');

// //add employee by using name not only method
// //accounting.employees[2] = 'Andy'; //throws error bcz of private 

// accounting.name ='new name'; //public so it wont throw error

// accounting.describe();
// accounting.printEmployeeInformation();

// //typescript introduce this feature private and public