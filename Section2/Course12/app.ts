//Function type and callbacks


function addAndHandle(n1: number,n2: number, cb:(num:number) => void){
    const result = n1 + n2;
    cb(result); //callback function //callback holds only one argument
}
addAndHandle(10,20, (result)=>{
    console.log(result);
});