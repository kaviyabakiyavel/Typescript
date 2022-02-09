//Implement Decorators for the Accessor, Methods, and Parameters for the class in TypeScript.

function Log(target: any, propertyName: string){
    console.log("property Decorator");
    console.log("target", target);
    console.log("propertyName", propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Accessor Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor)
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Method Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor)
}

function Log4(target: any, name: string, position: number){
    console.log("parameter Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("position", position)
}

class Product{
    @Log //decorator for property
    title:string;
    private _price: number;

    @Log2 //decorator for accessor
    set price(value: number){
        if(value > 0){
            this._price  = value;
        } else{
            throw new Error('Price should be positive number') 
        }
    }

    constructor(title: string, price: number){
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * tax;
    }
}