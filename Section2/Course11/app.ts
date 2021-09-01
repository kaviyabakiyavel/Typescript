//function type are types that describe a function regarding the parameters and the return value of that function
function add(n1: number , n2:number){
    return n1 + n2;
}
function printResult(num : number): void{
    console.log("Result: " + num);
}
printResult(add(5 , 12));

//combinevalues variable arssigned --> 
//it takes arrow function 
//and its take two parameter 
//and return number as an output

let combineValues : (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8,8)); 