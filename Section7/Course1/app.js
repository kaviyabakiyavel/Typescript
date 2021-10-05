//Generics
//Generic functions and classes
//Constraints
//Special TypeScript Types
//generic type is a type which is kind of connected with some other type and is really flexible 
//<> inside angle braket decide which type of data which should go inside array
// const names2 : Array<string | number> = [];
// const names3 : Array<any> = [];
//better stafy by using generic type 
var names1 = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 2000);
});
promise.then(function (data) {
    data.split(' ');
});
//generic function
// function merge(objA:object,  objB:object){
//   return Object.assign(objA,objB)
// }
// const mergedObj1 = merge({name: 'Max'},{age: 30});
//mergedObj1.age;
//typescript throws error 
//merge function return object but doesnt carry all the information 
// const mergedObj2 = merge({name: 'Max'},{age: 30}) as {name: string, age: number} ;
// mergedObj2.age;
// after inialized each variable , it doesnt throw any error
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj1 = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj1.age);
