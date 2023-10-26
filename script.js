"use strict;"

const myButton = document.querySelector('#my_button');

let printHelloMember = () => {
    let arrNames = ['RODRIGO!', 'CRISTINA!', 'ANDREA!', 'MARTIN!'];
    let random4 = Math.floor(Math.random() * 4);
    
    console.log(`Hola, bienvenid@ ${arrNames[random4]}`);
}

myButton.addEventListener('click', printHelloMember);