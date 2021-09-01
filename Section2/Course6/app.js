"use strict";
//enum 
//enum names start with upper case character
// const ADMIN = 0 ;
// const READ_ONLY = 1;
// const Author = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "KAVIYA";
})(Role || (Role = {}));
;
var person = {
    name: 'kaviya',
    age: 24,
    hobbies: ["sports", 'cooking'],
    //role : ADMIN
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
