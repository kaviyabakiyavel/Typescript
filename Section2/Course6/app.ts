//enum 
//enum names start with upper case character

// const ADMIN = 0 ;
// const READ_ONLY = 1;
// const Author = 2;


enum Role {ADMIN = 5 , READ_ONLY , AUTHOR = "KAVIYA"};
const person = {
    name : 'kaviya',
    age : 24 ,
    hobbies: ["sports",'cooking'],
    //role : ADMIN
    role : Role.ADMIN
};

if(person.role === Role.AUTHOR){
    console.log('is author');
}