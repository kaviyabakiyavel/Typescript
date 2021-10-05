// //Inheritance
// //eg : We have IT department, HR department, Accounting department
// //each department share the same basic information 
// //eg : ID,name,employee - but few shares different details Department : IT/HR/Accounting


// //course 5 : we can also override methods or properties from ur base class 
// //protected key word is we can use the property from other class as well
// //can able to access outside but it can able to access inside of classes that extend the base class
// class Department{
//     // private id : string;
//     // private name : string;
//     protected employees : string[] = []; //private can only access inside class object
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

// //By using extends keyword we can inherts the properties from the Department
// class ITDepartment extends Department{
//     //if ITDepartment class is empty its inherts the proporties from the parent to bas class
//     //can create a own constrcutor and pass parameter 
//     //super keyword used for inherts the property from the base class/parent class
//     admins: string[];
//     constructor(id:string, admins:string[]){
//        super(id,'IT'); 
//        this.admins = admins;
//     }
// }

// class AccountingDepartment  extends Department{
//    constructor(id:string,private reports: string[]) {
//        super(id,'Account');
//    } 
//    addReport(text:string){
//      this.reports.push(text);
//    }
//    printReports(){
//      console.log(this.reports);
//    }
//    addEmployee(name:string){
//     if(name === 'Max'){
//         return;
//     }
//     this.employees.push(name);
// }
// }

// //const accounting = new Department('Accounting');
// //const accounting = new ITDepartment('d1','Accounting'); since IT department class 
// const IT = new ITDepartment('d1',['Max']);

// IT.addEmployee('Max');
// IT.addEmployee('Manu');

// IT.name ='new name'; //public so it wont throw error

// IT.describe();
// IT.printEmployeeInformation();
// console.log("IT",IT);

// const Accounting = new AccountingDepartment('d2' , []);
// Accounting.addReport('Something went wrong...');
// Accounting.printReports();
// console.log("Accounting",Accounting)

