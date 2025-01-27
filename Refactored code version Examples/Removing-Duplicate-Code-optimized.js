// Removing Duplicate Code

// After refactoring
function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        totalPrice += calculateItemTotal(items[i]);
    }
    return totalPrice;
}

function calculateItemTotal(item) {
    if (item.discount) {
        return item.price * item.quantity * (1 - item.discount);
    } else {
        return item.price * item.quantity;
    }
}