let decrease = document.querySelector('.product-quantity .decrease');
let increase = document.querySelector('.product-quantity .increase');
let numbers =document.querySelector('.product-quantity-numb');

let value = 0;
// let productModalNumb = document.querySelector('.product-count');
// let productModalIncrease = document.querySelector('.product-increase');
// let productModalDecrease = document.querySelector('.product-decrease');
numbers.innerText = value;

function decreaseNumb(){
    --value;
    numbers.innerText = value;
}

function increaseNumb(){
    value++;
    numbers.innerText = value;
}
// function decreaseModalNumb(){
//     if(value >0){
//         --value;
//     productModalNumb.innerText = value;
//     }
// }

// function increaseModalNumb(){
//     if(value >=0){
//         value++;
//     productModalNumb.innerText = value;
//     }

// }
decrease.onclick = decreaseNumb;
increase.onclick = increaseNumb;
// productModalDecrease.onclick = decreaseModalNumb;
// productModalIncrease.onclick = increaseModalNumb;
