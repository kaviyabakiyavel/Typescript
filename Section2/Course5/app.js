"use strict";
// tuples added by tpescript fixed-length array
var person = {
    name: "kaviya",
    age: 24,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
person.role.push["admin"];
//person.role[1] = 10 ; //throws error not able to add thrid element.
//person.role = [0,'admin','user']; //throws error
console.log(person);
