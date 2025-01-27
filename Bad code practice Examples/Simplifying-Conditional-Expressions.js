// Simplifying Conditional Expressions

// Before refactoring
function isEligibleForDiscount(item) {
    if (item.price > 100 && item.quantity > 2) {
        return true;
    } else {
        return false;
    }
}