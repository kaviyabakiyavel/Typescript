//index properties []

//validation 
interface ErrorContainer{
//{
//emai:'Not a vallid email , 
//username: 'must start with a character',
//}
//property should be string and value should be string
[prop: string] : string ;
}
const errorBag  : ErrorContainer = {
    email : 'not a valid email!',
    username: 'must start with a capital character!'
}