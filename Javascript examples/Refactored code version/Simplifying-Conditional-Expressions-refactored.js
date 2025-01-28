// After refactoring
function isEligibleForDiscount(item) {
    return item.price > 100 && item.quantity > 2;
}