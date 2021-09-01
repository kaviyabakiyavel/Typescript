"use strict";
function addtwonumber(n1, n2) {
    return n1 + n2;
}
var numberone = 5;
var numbertwo = 2.8;
var result1 = addtwonumber(numberone, numbertwo);
console.log(result1);
//typecsript help us during development "compilation time"
//it wont change output at runtime "throws error on compliation time"
//typescript is stastically typed - cant change the types - so error ill occur during development time when compiling your code.
//string , number - typescript re all lowercase!
// function addtwonumber(n1:number,n2:number){
//     if(typeof n1 !== 'number' || typeof n2 !== 'number'){
//         throw new Errror('incorrect input');
//     }
//     return n1 + n2;
// }
// const numberone = '5';
// const numbertwo = 2.8;
// const result1 = addtwonumber(numberone , numbertwo);
// console.log(result1);
