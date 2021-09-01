//never type - this function never produce return value.
//by default function takes void type . but explicity declare never type . the function never returns anything 
function generateError(message:string,code:number): never{
   throw{message : message , errorcode : code};
}
const result = generateError('An error occured',500);
console.log(result)