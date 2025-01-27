// After refactoring
function calculateTotalPrice(items) {
    return items.reduce((totalPrice, item) => totalPrice + calculateItemTotal(item), 0);
}