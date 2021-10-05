var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Generic classes
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
var number_stringStorage = new DataStorage();
//one problem 
var objectStorage = new DataStorage();
objectStorage.addItem({ name: 'max' });
objectStorage.addItem({ name: 'manu' });
objectStorage.removeItem({ name: 'max' });
console.log(objectStorage.getItems());
