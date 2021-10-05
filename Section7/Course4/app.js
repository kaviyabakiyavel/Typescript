//genericc type 
//by using key of 
//from the first parameter getting key from that object
function extraAndConvert(obj, key) {
    return 'Value:' + obj[key];
}
//extraAndConvert({},'name'); 
//throws error because first object doesnt have key and value 
console.log(extraAndConvert({ name: 'max' }, 'name'));
