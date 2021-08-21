// Updating Cost
function updateCost(product, cost) {
    const costElement = document.getElementById(product + '-cost');
    costElement.innerText = cost;
    addTotal();
}
// Convert to Float 
function convertToFloat(text) {
    const number = parseFloat(text);
    return Number;
}
// Memory Cost
document.getElementById('8gb-memory').addEventListener('click', function () {
    updateCost('memory', 0);
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    updateCost('memory', 180);
});
// Storoge Cost 
document.getElementById('256gb-ssd').addEventListener('click', function () {
    updateCost('storage', 0);
});
document.getElementById('512gb-ssd').addEventListener('click', function () {
    updateCost('storage', 100);
});
document.getElementById('1t-ssd').addEventListener('click', function () {
    updateCost('storage', 180);
});
// Delivery Cost 
document.getElementById('free-delivery').addEventListener('click', function () {
    updateCost('delivery', 0);
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateCost('delivery', 20);
});

// Calculate Total 
function addTotal() {
    const totalCostText = document.getElementById('total-cost').innerText;
    const totalCost = convertToFloat(totalCostText);
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = convertToFloat(memoryCostText);
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = convertToFloat(storageCostText);
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = convertToFloat(deliveryCostText);
    const totalPrice = totalCost + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('discount-price').innerText = totalPrice;
}
// Promo Code 
if (document.getElementById('promo-btn').click == true) {
    document.getElementById('promo-btn').addEventListener('click', function () {
        if (document.getElementById('input-code').value == 'stevekaku') {
            totalPrice = -totalPrice * 0.2;
            document.getElementById('discounted-total').innerText = discountPrice;
            document.getElementById('input-code').value = '';
            console.log('discountPrice')
        }
    })
}