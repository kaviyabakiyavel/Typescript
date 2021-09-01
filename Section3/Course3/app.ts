//Array and object destructing 
//destructing basically pull the element out of the array
//destructing doesnt not change the old array.
//value just pulling out of the array

//array destructing
const hobbies = ['Sports' , 'Cooking'];
const [hobby1 , hobby2 , ...remainingHobbies] = hobbies;
console.log("Array destruccting", hobbies,hobby1,hobby2)

//object destructing
const person = {
    firstName : 'Kaviya',
    age : 30
}
//firstName: userName changing firstname to username
const {firstName: userName,age} = person;
console.log("Object destructng",userName,age);