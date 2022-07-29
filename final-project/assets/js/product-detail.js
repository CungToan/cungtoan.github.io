const productCount = document.querySelector('.product-count');
const productIncrease = document.querySelector('.numbs .product-increase');
const productDecrease = document.querySelector('.numbs .product-decrease');
let value = 1;
productCount.innerText = value;

function decreaseNumb(){
    --value;
    productCount.innerText = value;
}

function increaseNumb(){
    value++;
    productCount.innerText = value;
}

productDecrease.onclick = decreaseNumb;
productIncrease.onclick = increaseNumb;