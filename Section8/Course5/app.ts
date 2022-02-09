// //implement decorators in class properties 


// //in target bascially we are getting prototype of the instance
// function Log(target: any , propertyName: string) {
//   console.log("target",target);
//   console.log("propertyName",propertyName);
// }
// class product{
//     //applying decorators for property 
//     @Log
//     title : string;
//     private _price : number;

//     constructor(title : string , price: number){
//        this.title = title;
//        this._price = price;
//     }
// }

// const product1 = new product('New Product', 12);
// console.log(product1)