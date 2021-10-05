//singletons and private constructor
//Singleton is a object oriented concepts 
//singleton means one instances as to create for the class
//when you put private for the constructor -> outside ppl cant create object for this constructor
//when singleton pattern will use - whenever your application needs singleton or one instance

class Department1 {
  private employees : string[] = [];
  static readonly finacialYear = 2020;
  constructor(protected readonly id : string , public name : string){

  }
}

class AccoutingDepartment extends Department1{
    private lastRecord : string;
    private static instance : AccoutingDepartment;
    private constructor(id:string,public reports : string[]){
        super(id , 'Accounting');
        this.lastRecord = reports[0];
    }
    //static method we can access outside 
    //in statiic this refers to the clsssName (this.instance) / (AccoutingDepartment.instance)
    //If you call (this.describe) throws error because only static method and static proprties can be accessible 
    static getInstance(){
     if(AccoutingDepartment.instance){
         return this.instance;
     }
     //is there is no instance
     this.instance = new AccoutingDepartment('d2',[])
     return this.instance
    }
}
//const accounting =  new AccoutingDepartment ('d2' , [])
const accounting1 = AccoutingDepartment.getInstance();
const accounting2 = AccoutingDepartment.getInstance();

console.log("accounting1",accounting1)
console.log("accounting2",accounting2)