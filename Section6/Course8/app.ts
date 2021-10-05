//optional chaining
const fetchedUserData = {
    id : 'u1',
    name : 'Max',
    job : {title : 'CEO' , description : 'My own company'}
}
//avoiding runtime error in javascript
//console.log(fetchedUserData.job && fetchedUserData.job.title);
//or in typescript to avoid error  ? 
//safely access the nested property and nested object 
console.log(fetchedUserData?.job?.title)

