//  Renaming Variables and Functions

// After refactoring
function calculateTotalPrice(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        totalPrice += calculateItemTotal(items[i]);
    }
    return totalPrice;
}

function calculateItemTotal(item) {
    return item.price * item.quantity;
}