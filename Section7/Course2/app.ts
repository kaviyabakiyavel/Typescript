//working with constraints
//setting constraints in generic type
function merge1<T extends Object , U extends Object >(objA: T, objB: U){
    return Object.assign(objA, objB);
}
// const mergedObj = merge1({name : 'Max' , hobbies:['sports','drawing']}, 30);
// console.log(mergedObj)

const mergedObj = merge1({name : 'Max' , hobbies:['sports','drawing']}, {age:30});
console.log(mergedObj)
