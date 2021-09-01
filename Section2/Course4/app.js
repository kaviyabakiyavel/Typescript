"use strict";
//array
var person = {
    name: 'kaviya',
    age: 30,
    hobbies: ['drawing', 'planting']
};
var favactivities;
favactivities = ['Sports'];
//if it as missed array 
//let favactivities : any[];
//favactivities = ['sports' , 1]
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
