let cartElement = document.querySelector('.cart')
let cart2Element = document.querySelector('.cart2')
let cart = '';

document.getElementById('kBtn').addEventListener('click', function () {
    cart += `<div class="order"></div>` 
    cartElement.innerHTML = cart;
});


document.getElementById('oBtn').addEventListener('click', function () {
    cart += `<div class="order"></div>` 
    cartElement.innerHTML = cart;

});

document.getElementById('kBtn').addEventListener('click', function () {
    cart += `<div class="order"></div>` 
    cart2Element.innerHTML = cart;
});


document.getElementById('oBtn').addEventListener('click', function () {
    cart += `<div class="order"></div>` 
    cart2Element.innerHTML = cart;

});