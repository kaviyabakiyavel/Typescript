//function return types & void
// function add(n1: number , n2: number): string{
//     return n1 + n2;
// }

//return void means 
//that function doesnt return anything 
//undefined is a valid type in typescript 
function add(n1: number , n2: number){
    return n1 + n2;
}
function printResult(num : number): void{
    console.log('Result:' +num);
}
printResult(add(5,12));

//this function throws error 
//becz fnction doent return undefined
// function printResult1(num : number): undefined{
//     console.log('Result:' +num);
// }
// printResult1(add(5,12));

//when you use undefined in function typescript except return 
function printResult1(num : number): undefined{
    console.log('Result:' +num);
    return ;
}

//or 
function printResult2(num : number): void{
    console.log('Result:' +num);
    return ;
}
// printResult1(add(5,12));
//let somevalue : undefined