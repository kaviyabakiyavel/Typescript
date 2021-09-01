//Array and object destructing 
//destructing basically pull the element out of the array
//destructing doesnt not change the old array.
//value just pulling out of the array
//array destructing
var hobbies = ['Sports', 'Cooking'];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log("Array destruccting", hobbies, hobby1, hobby2);
//object destructing
var person = {
    firstName: 'Kaviya',
    age: 30
};
//firstName: userName changing firstname to username
var userName = person.firstName, age = person.age;
console.log("Object destructng", userName, age);
