//genericc type 
//by using key of 
//from the first parameter getting key from that object

function extraAndConvert<T extends object, U extends keyof T>( obj : T , key : U){
    return 'Value:' + obj[key];
}
//extraAndConvert({},'name'); 
//throws error because first object doesnt have key and value 
console.log(extraAndConvert({name:'max'},'name'))
