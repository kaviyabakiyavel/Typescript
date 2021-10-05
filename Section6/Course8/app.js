var _a;
//optional chaining
var fetchedUserData = {
    id: 'u1',
    name: 'Max'
};
//avoiding runtime error in javascript
//console.log(fetchedUserData.job && fetchedUserData.job.title);
//or in typescript to avoid error  ? 
//safely access the nested property and nested object 
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
