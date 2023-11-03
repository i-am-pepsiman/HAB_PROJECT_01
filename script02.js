"use strict";
const prices = {
    crash: 60,
    hihatClosed: 50,
    hihatOpen: 50,
    kick: 80,
    ride: 70,
    snare: 30,
    tomHigh: 100,
    tomLow: 60,
    tomMid: 90
}

let totalElement = document.getElementById('total_price');
let totalPrice = 0;

document.addEventListener('click', (event) => {
    let clickedElement = event.target.id;
    let priceId = clickedElement.split('_');
    if (priceId[0] === 'plus'){
        totalPrice += prices[priceId[1]];
    } else if(priceId[0] === 'less'){
        if (totalPrice > 0 && totalPrice - prices[priceId[1]] > 0) {
            totalPrice -= prices[priceId[1]];
        } else {
            totalPrice = 0;
        }
    }
    totalElement.innerHTML = `€ ${totalPrice}`;
})
