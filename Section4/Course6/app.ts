//Inheritance
//eg : We have IT department, HR department, Accounting department
//each department share the same basic information 
//eg : ID,name,employee - but few shares different details Department : IT/HR/Accounting


//course 5 : A getter is basically a property where you execute a function or a method when you retrieve a value
//setter method  helping to set new values 
//getter and setter which can be great for encapsulating logic and for adding extra logic . tat should run when try to read a property or when try to set up property 
class Department{
    // private id : string;
    // private name : string;
    protected employees : string[] = []; //private can only access inside class object
    constructor(private readonly id : string , public name : string){
        // this.id = id;
        // this.name = n;
    }
    describe(this: Department){
        console.log('Department:'+ this.name + this.id);
    }
    addEmployee(employee : string){
      this.employees.push(employee); 
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//By using extends keyword we can inherts the properties from the Department
class ITDepartment extends Department{
    //if ITDepartment class is empty its inherts the proporties from the parent to bas class
    //can create a own constrcutor and pass parameter 
    //super keyword used for inherts the property from the base class/parent class
    admins: string[];
    constructor(id:string, admins:string[]){
       super(id,'IT'); 
       this.admins = admins;
    }
}

//const accounting = new Department('Accounting');
//const accounting = new ITDepartment('d1','Accounting'); since IT department class 
const IT = new ITDepartment('d1',['Max']);

IT.addEmployee('Max');
IT.addEmployee('Manu');

IT.name ='new name'; //public so it wont throw error

IT.describe();
IT.printEmployeeInformation();
console.log("IT",IT);


class AccountingDepartment  extends Department{
    private lastReport: string;

    get mostRecentReport (){
        if(this.lastReport){
            //encapsuale something so lastreport publlcically assceble now
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value:string){
        if(!value){
          throw new Error('Please pass in a valid value!')
        }
      this.addReport(value);
    }
   constructor(id:string,private reports: string[]) {
       super(id,'Account');
       this.lastReport = reports[0];
   } 
   addReport(text:string){
     this.reports.push(text);
   }
   printReports(){
     console.log(this.reports);
   }
   addEmployee(name:string){
    if(name === 'Max'){
        return;
    }
    this.employees.push(name);
}
}

const Accounting = new AccountingDepartment('d2' , []);
//console.log(Accounting.mostRecentReport);
//Accounting.mostRecentReport = ''; //empty string falsy value so throw error 
Accounting.mostRecentReport = 'Year end Report';
Accounting.addReport('Something went wrong...');
console.log(Accounting.mostRecentReport);
Accounting.printReports();
console.log("Accounting",Accounting)

