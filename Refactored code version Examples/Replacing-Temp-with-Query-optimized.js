// After refactoring
function calculateTotalPrice(items) {
    return calculateBasePrice(items) - calculateDiscount(calculateBasePrice(items));
}

function calculateBasePrice(items) {
    return items.reduce((basePrice, item) => basePrice + calculateItemTotal(item), 0);
}

function calculateDiscount(basePrice) {
    if (basePrice > 1000) {
        return basePrice * 0.1;
    } else {
        return 0;
    }
}