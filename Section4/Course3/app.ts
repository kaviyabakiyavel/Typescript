// //shorthand initialization
// class Department{
//     // private id : string;
//     // private name : string;
//     private employees : string[] = []; //private can only access inside class object
//     constructor(private readonly id : string , public name : string){
//         // this.id = id;
//         // this.name = n;
//     }
//     describe(this: Department){
//         console.log('Department:'+ this.name + this.id);
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

// accounting.name ='new name'; //public so it wont throw error

// accounting.describe();
// accounting.printEmployeeInformation();
