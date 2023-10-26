"use strict;"

const myButton = document.querySelector('#my_button');

let printHelloMember = () => {
    let arrNames = ['Rodrig!', 'Cristina!', 'Andrea!', 'Martin!'];
    let random4 = Math.floor(Math.random() * 4);
    
    console.log(`Hola, bienvenid@ ${arrNames[random4]}`);
}

myButton.addEventListener('click', printHelloMember);