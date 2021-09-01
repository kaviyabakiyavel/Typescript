// const add = (a : number , b: number) => {
//     return a + b ;
// }
// console.log(add(2,5));

//or 
//default parameter 
const addition = (a : number , b : number = 1) => a + b ;
const printOutput : (a:number | string) => void = output => console.log(output)
const button = document.querySelector('button');
if(button){
    button.addEventListener('click',event => console.log(event))
}
printOutput(addition(5)); 
// default parameter pass to first element in the argument

//spread operator
const hobbies = ['Sports' , 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies)

const person = {
    name : 'Max',
    age : 30
}
const copiedPerson = {...person}
console.log(copiedPerson)

//Rest operator
const listofnumbers = (...numbers : number[]) => {
   return numbers.reduce((curResult,curValue) => {
       return curResult + curValue;
   },0)
};
const addnumbers = listofnumbers(5,10,2,3.7);
console.log(addnumbers);