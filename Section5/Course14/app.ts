//interfaces as function types
//interface are used to defined the object structure
//interface can also be used to define the structure of a function

//eg1:
// type AddFn = (a: number , b: number) => number;
// let addition : AddFn;
// addition = (n1:number , n2:number) => {
//     return n1+n2;
// } 

//by using interface
interface AddFn{
    (a:number,b:number) : number;
}
let addition: AddFn;
addition = (n1:number , n2:number) => {
    return n1+n2;
}
