//narrowing down call signature of your function 
//function overloading noting changes in implementation

// function getID():number
// function getID(qty: 0): never //never means function not returing anything
// function getID(qty: number): number[]
// function getID(qty: number): number | number[]{
//  if(qty === 0) throw new Error('Qty can be zer0');
//  if(!qty) return Math.random()
//  const arr = [] 
//  for(let i = 0 ; i < qty ; i++){
//      arr.push(Math.random())
//  }
//  return arr
// }
// console.log(getID(0))
// let myNumber: number 
// myNumber = getID(0)


// function someFunction(val1 : number);
// function someFunction(val1:number , val2:number);
// function someFunction(val1:number , val2:number , val3:number);

// function someFunction(val1:number , val2:any = null , val3:any = null){
//    console.log(val1);
//    if(val2 != null){
//        console.log(val1 + val2);
//    }
// }
// someFunction(6);
// someFunction(4,5);
// someFunction(1,2,3);


// function print(x : number);
// function print(x : string);
// function print(x : boolean);
// function print(x: any){
//   document.write(x);
// }