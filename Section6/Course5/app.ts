//typecasting
function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving speed:' +speed);
}
moveAnimal({type: 'bird', flyingSpeed:10});
const userInputElement = <HTMLInputElement>document.getElementById('user-input');
//or
//const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there!'

//typecasting refers this tage as html element <HTMLInputElement> 
// exclamatory mark - when we select something from the DOM that might return null 