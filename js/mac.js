
let totalPrice = grandTotal()

// convert any text to price 
function textToPrice(price) {
    let priceText = document.getElementById(price).innerText;
    let priceFloat = parseFloat(priceText);
    return priceFloat;
}


// Update Total And grand Total from price table 
function grandTotal() {
    let basePrice = textToPrice('fixed-price');
    let extraMemoryCost = textToPrice('memory-cost');
    let extraStorageCost = textToPrice('storage-cost');
    let deliveryCharge = textToPrice('delivery-cost')
    let totalPrice = basePrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;
    return totalPrice;
}

// Using Promo Code and update the Grand Total
function promoCalc(price) {
    let total = 0;
    let grandTotal = 0
    let couponTxt = document.getElementById('input-promo').value;
    price = textToPrice('total-price')
    if (couponTxt == 'stevekaku') {
        total = price * .2;
        grandTotal = price - total;
    }
    else {
        grandTotal = price;
    }
    document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('input-promo').value = '';
}

// click on Promo and calculate the total if promo is valid 
document.getElementById('promo-button').addEventListener('click', function () {
    promoCalc(totalPrice);
})

// update total when select different specification 
function valueupdate(id, price) {
    document.getElementById(id).innerText = price;
    grandTotal()
}

// click on 8GB memory and add $0 on Extra Memory Cost
document.getElementById('memory-8').addEventListener('click', function () {
    valueupdate('memory-cost', 0)
})
// click on 16GB memory and add $180 on Extra Memory Cost
document.getElementById('memory-16').addEventListener('click', function () {
    valueupdate('memory-cost', 180)
})

// click on 256GB storage and add $0 on Extra storage Cost
document.getElementById('storage-256').addEventListener('click', function () {
    valueupdate('storage-cost', 0)
})
// click on 512GB storage and add $100 on Extra storage Cost
document.getElementById('storage-512').addEventListener('click', function () {
    valueupdate('storage-cost', 100)
})
// click on 1TB storage and add $180 on Extra storage Cost
document.getElementById('storage-1TB').addEventListener('click', function () {
    valueupdate('storage-cost', 180)
})

// click on free Prime Delivery and add $0 on Delivery Charge
document.getElementById('free-delivery').addEventListener('click', function () {
    valueupdate('delivery-cost', 0)
})
// click on cost Delivery and add $20 on Delivery Charge
document.getElementById('cost-delivery').addEventListener('click', function () {
    valueupdate('delivery-cost', 20)
})
