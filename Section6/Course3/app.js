"use strict";
//section6 
//Advanced typing concepts 
exports.__esModule = true;
//More on type guards
//type guard help us with union type 
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name:' + emp.name); //when access common property both type , it wont throw any error
    // console.log('startDate: ' + emp.startDate)
    // throw error here type guard came into picture 
    // checking privilege property inside emp
    if ('privileges' in emp) {
        console.log('privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'kaviya', startDate: new Date() });
