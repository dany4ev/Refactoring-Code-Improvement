// Before refactoring
function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].discount) {
            totalPrice += items[i].price * items[i].quantity * (1 - items[i].discount);
        } else {
            totalPrice += items[i].price * items[i].quantity;
        }
    }
    return totalPrice;
}