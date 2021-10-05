//Another generic funcction 
interface Lengthy{
 length : number
}
function countAndPrint<T extends Lengthy>(element: T):[T,string]{
    let descriptionText = 'Got no value';
    if(element.length === 1){
        descriptionText = 'Got 1 element.';
    }
    else if(element.length > 1 ){
       descriptionText = 'Got' + element.length + 'elements.';
    }
    //return tuple 
    return [element, descriptionText];
}
console.log(countAndPrint('hi i am kaviya'));
//console.log(countAndPrint(['sports','cooking'])); //print 2 array 
//console.log(countAndPrint(10)); //throws error bcz of number