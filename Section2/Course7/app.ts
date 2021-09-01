//function can except two different kinds f value(number,string) - union can help in this secnario

function combaine(input1 : number | string , input2: number | string ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
       result = input1.toString() + input2.toString();
    }
   return result
}
const combainedAges = combaine(30,26);
console.log(combainedAges);

const combinedNames = combaine('kaviya','bakiyavel');
console.log(combainedAges);