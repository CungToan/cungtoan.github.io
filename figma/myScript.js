let decrease = document.querySelector('.product-quantity .decrease');
let increase = document.querySelector('.product-quantity .increase');
let value = 0;
let numbers =document.querySelector('.product-quantity-numb')
function decreaseNumb(){
    --value;
    numbers.innerText = value;
}

function increaseNumb(){
    value++;
    numbers.innerText = value;
}
decrease.onclick = decreaseNumb;
increase.onclick = increaseNumb;

