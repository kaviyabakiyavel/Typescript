//Constructor function and this keyword
//refer to a class property or method from the inside of the class. (by using this keyword)
class Departmentdet{
    name: string;
    constructor(n: string){
      this.name = n;
    }
    //when pass this:departmentdet parameter accountingcopy throws error
    describe(this : Departmentdet){
        //this console refer to window object 
        console.log('Department ' + name);
        //this console refers to inside class properties (by using this keyword)
        console.log('Department ' + this.name) 
    }
}
const accountingdet = new Departmentdet('Accounting');
accountingdet.describe();

//creating dumbby object not refering to any class , so when it calls describe method , it wil print "undefined" becuase {this} not pointing to any object  
// const accountingCopy = {describe : accountingdet.describe};
// accountingCopy.describe();


//adding name properties once added name parameter it wont throw any error in accountingCopy
//because object looks similar to departmentdet class
const accountingCopy = {name: 'kavi' , describe : accountingdet.describe};
accountingCopy.describe();
