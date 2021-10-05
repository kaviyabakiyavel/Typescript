
//Discriminated union
//Its a pattern which you can use when working with union types that makes implementing type gauard easier.
//Its available with object type

interface Bird{
    //discriminate union
    //literal type
    type: 'bird';
    flyingSpeed: number;
}
interface Horse{
    type: 'horse';
    runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal:  Animal){
    //if any spelling mistake hap in flyingSped throws error
    //  if('flyingSpeed' in animal){
    //      console.log('Moving with speed:' +animal.flyingSpeed);
    //  }
     //we cant use instanceof inside interface it s throws error
    //  if(animal instance Bird){
    //      console.log('Moving with speed' + animal.flyingSpeed);
    //  }
    let speed ;
   switch(animal.type){
       case 'bird':
           speed = animal.flyingSpeed;
       case 'horse':
        //    speed = animal.runningSpeed;
   }
   console.log('Moving at speed:' +speed);
}
moveAnimal({type : 'bird',flyingSpeed: 10})


//discriminate type is very useful to object and working with union type