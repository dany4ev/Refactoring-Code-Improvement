// Before refactoring
function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > 100 && items[i].quantity > 2) {
            totalPrice += calculateItemTotal(items[i]) * 0.9;
        } else {
            totalPrice += calculateItemTotal(items[i]);
        }
    }
    return totalPrice;
}