//static properties and methods 
//static properties and methods allow you to add properties and methods to classes which are not accessed instance of the class .
//we call it directly on the class without the new keyword.
//when declare with static keyword either property or method , can't able to access inside the class 
//whole idea of static is detached from the instance . constrctor method we cant change to static .

class NewDepartment{
    static finacialyear = '2021'

    constructor(){
        //console.log(this.finacialyear);
        console.log(NewDepartment.finacialyear)
    }
    //static method
    static createEmployee(name : string){
        return {name : name};
    }
}

const employee1 = NewDepartment.createEmployee('Kaviya');
console.log("employee1",employee1 , NewDepartment.finacialyear)