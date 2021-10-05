//section6 
//Advanced typing concepts 

import { TypeFlags } from "typescript"

//Module Content
// 1) Intersection Types 
// 2) Type Guards 
// 3) Discriminated unions 
// 4) Type Casting 
// 5) Function Overloads


//intersection type - Intersection type allow us to combain other types.

//1) by using type
// type Admin = {
//     name : string;
//     privileges: string[]
// };
// type Employee = {
//     name : string;
//     startDate : Date;
// }
// type ElevatedEmployee = Admin & Employee ;

// const e1 : ElevatedEmployee ={
//     name : 'kaviya',
//     privileges: ['create-server'],
//     startDate: new Date()
// }

// intersection types are closely related to interface inheritance because of course,
//2) by using interface
interface Admin {
    name : string;
    privileges: string[];
}
interface Employee{
    name : string;
    startDate : Date;
}
// interface ElevatedEmployee extends Employee , Admin{
  
// }

//3) eg union type (|) 
//intersection (&)
type Combineable = string | number;
type Numeric = number | boolean;
type Universal = Combineable & Numeric;

//More on type guards
//type guard help us with union type 
function add(a: Combineable , b:Combineable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnKnowEmployee = Employee | Admin 
function printEmployeeInformation (emp: UnKnowEmployee){
    console.log('Name:' + emp.name); //when access common property both type , it wont throw any error
    // console.log('startDate: ' + emp.startDate)
    // throw error here type guard came into picture 
    // checking privilege property inside emp
    if('privileges' in emp){
        console.log('privileges: ' + emp.privileges)
    }
    if('startDate' in emp){
        console.log('startDate: ' + emp.startDate)
    }
}
printEmployeeInformation({name : 'kaviya' , startDate: new Date()})


//eg
class Car{
    drive(){
        console.log('Driving. a car....');
    }
}
class Truck{
    drive(){
        console.log('Driving a truck....');
    }
    loadCargo(amount: number){
        console.log('Loading cargo...'+amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    //this throws error 
    //vehicle.loadCargo(1000);
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000);
    }
    //alternative way by using instanceof
    //but intsnaceof not work in interface 
    //but It can work in type 
    // if(vehicle instanceof Truck){
    //     vehicle.loadCargo(1000);
    // }
}
useVehicle(v1);
useVehicle(v2)
