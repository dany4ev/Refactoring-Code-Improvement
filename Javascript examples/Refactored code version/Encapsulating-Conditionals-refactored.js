// After refactoring
function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        if (isEligibleForDiscount(items[i])) {
            totalPrice += calculateItemTotal(items[i]) * 0.9;
        } else {
            totalPrice += calculateItemTotal(items[i]);
        }
    }
    return totalPrice;
}

function isEligibleForDiscount(item) {
    return item.price > 100 && item.quantity > 2;
}