//Generic classes
class DataStorage <T>{
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
      this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems())

const number_stringStorage = new DataStorage<number | string>();

//one problem 
const objectStorage = new DataStorage<object>();
objectStorage.addItem({name: 'max'});
objectStorage.addItem({name: 'manu'});
objectStorage.removeItem({name: 'max'});
console.log(objectStorage.getItems()); // always eemoving last element of the array
