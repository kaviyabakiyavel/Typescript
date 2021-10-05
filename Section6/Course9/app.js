var _a, _b, _c, _d, _e, _f;
//example for object chaning syntax and nullish coalesching 
var obj = JSON.parse(JSON.stringify({
    system: {
        user: {
            name: 'Kaviya',
            age: 21
        }
    }
}));
//console.log(obj.system && obj.system.user && obj.system.user.name)
//optional chaning syntax for reducing the line of code above
console.log(((_b = (_a = obj.system) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.name) || 'Object doesnt exist');
////nullish coalesching(??)
// 0 empty string consider falsy values 
//in javascript 
//console.log(0 || 'zero is falsey') //print zero is falsey
//console.log('' || 'empty string is falsey') //print empty string is falsey
//if its null and undefined value  return second operend value 
console.log((_e = (_d = (_c = obj.system) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : 'Object doesnt exist');
https: //mariusschulz.com/blog/nullish-coalescing-the-operator-in-typescript#:~:text=operator%2C%20which%20is%20known%20as,might%20be%20null%20or%20undefined%20.
 var fetchedUserData1 = {
    id: 'u1',
    name: 'kaviya',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_f = fetchedUserData1 === null || fetchedUserData1 === void 0 ? void 0 : fetchedUserData1.job) === null || _f === void 0 ? void 0 : _f.title);
//for checking particularly unless its null or undefined 
var userInput1 = null;
var storedData = userInput1 !== null && userInput1 !== void 0 ? userInput1 : "Default";
console.log("storedData", storedData);
