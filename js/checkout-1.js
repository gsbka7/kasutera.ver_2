let minusElements = document.querySelectorAll('.minus'); //減按鈕
let plusElement = document.querySelectorAll('.plus'); //加按鈕
let inputCountElement = document.querySelectorAll('.inputCount'); //商品數量
let itemElement = document.querySelectorAll('.item'); //商品項目
let priceElement = document.querySelectorAll('.price'); //商品單價
let totlaPriceElement = document.querySelectorAll('.total-price span'); //單個商品總金額
//總計
let qtyElement = document.querySelector('.qty span'); //商品數量總計
let orderSubtotalElement = document.querySelector('.order-subtotal span'); //全部商品總金額
let feeElement = document.querySelector('.fee span'); //運費
let orderPriceElement = document.querySelector('.order-price span'); //購物車總金額



window.onload = function(){
    for(let i = 0; i < itemElement.length; i++){
        totalPrice(i);
    }
}

minusElements.forEach(function (minus, index) {
    minus.addEventListener('click', function () {
        if(inputCountElement[index].value <= 1){
            let ask = confirm('是否移除該商品')

            if (ask) {
                itemElement[index].remove()
            }else{
                return
            }
        }
        handleBottom(index, -1)
    });
});

plusElement.forEach(function (plus, index) {
    plus.addEventListener('click', function () {
        if(inputCountElement[index].value  >= 99){
            alert('已超出購買數量');
            return;
        }
        handleBottom(index, 1)
    });
});

inputCountElement.forEach(function(input, index) {
    input.addEventListener('change', function (){
        if(input.value <= 0){
            input.value = 1;
        }else if(input.value >= 100){
            input.value = 99;
            alert('已超出購買數量');
            return;
        }
        totalPrice(index);
    })
})

function handleBottom(index, num){
    inputCountElement[index].value = Number(inputCountElement[index].value) + num;
    totalPrice(index);
 
}

function totalPrice(index){
    totlaPriceElement[index].innerHTML = Number(inputCountElement[index].value) * Number(priceElement[index].textContent)
    total(index);
}

function total(index){
    qty = 0;
    orderSubtotal = 0;
    fee = 260;
    orderPrice= 0;

    for(let i = 0; i<itemElement.length; i++){
        qty += Number(inputCountElement[i].value);
        orderSubtotal += Number(totlaPriceElement[i].textContent)
    }

    if(orderSubtotal >= 1200) fee = 0;
    
    qtyElement.innerHTML = qty;
    orderSubtotalElement.innerHTML = orderSubtotal;
    feeElement.innerHTML = fee;
    orderPriceElement.innerHTML = Number(orderSubtotal + fee);
}
