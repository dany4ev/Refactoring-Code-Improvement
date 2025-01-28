// Before refactoring
function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        totalPrice += calculateItemTotal(items[i]);
    }
    return totalPrice;
}