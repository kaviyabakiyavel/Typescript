
//array
const person = {
    name : 'kaviya',
    age : 30,
    hobbies : ['drawing','planting']
}
let favactivities : string[];
favactivities = ['Sports'];

//if it as missed array 
//let favactivities : any[];
//favactivities = ['sports' , 1]

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}