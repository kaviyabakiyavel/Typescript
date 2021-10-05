function countAndPrint(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements.';
    }
    //return tuple 
    return [element, descriptionText];
}
console.log(countAndPrint('hi i am kaviya'));
