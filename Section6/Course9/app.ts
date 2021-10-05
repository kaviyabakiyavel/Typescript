
//example for object chaning syntax and nullish coalesching 
const obj = JSON.parse(JSON.stringify(
    {
        system:{
            user:{
                name: 'Kaviya',
                age: 21
            }
        }
    }
))
//console.log(obj.system && obj.system.user && obj.system.user.name)
//optional chaning syntax for reducing the line of code above
console.log(obj.system?.user?.name || 'Object doesnt exist')

////nullish coalesching(??)
// 0 empty string consider falsy values 
//in javascript 
//console.log(0 || 'zero is falsey') //print zero is falsey
//console.log('' || 'empty string is falsey') //print empty string is falsey
//if its null and undefined value  return second operend value 
console.log(obj.system?.user?.name ?? 'Object doesnt exist')
https://mariusschulz.com/blog/nullish-coalescing-the-operator-in-typescript#:~:text=operator%2C%20which%20is%20known%20as,might%20be%20null%20or%20undefined%20.


const fetchedUserData1 = {
    id : 'u1',
    name: 'kaviya',
    job: {title: 'CEO' , description: 'My own company'}
};
console.log(fetchedUserData1?.job?.title);

//for checking particularly unless its null or undefined 
const userInput1 = null; 
const storedData = userInput1 ?? "Default";
console.log("storedData",storedData) //output default