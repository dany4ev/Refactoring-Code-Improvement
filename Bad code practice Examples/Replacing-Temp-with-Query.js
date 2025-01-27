// Before refactoring
function calculateTotalPrice(items) {
    let basePrice = calculateBasePrice(items);
    let discount = calculateDiscount(basePrice);
    return basePrice - discount;
}

function calculateBasePrice(items) {
    let basePrice = 0;
    for (let i = 0; i < items.length; i++) {
        basePrice += calculateItemTotal(items[i]);
    }
    return basePrice;
}

function calculateDiscount(basePrice) {
    if (basePrice > 1000) {
        return basePrice * 0.1;
    } else {
        return 0;
    }
}