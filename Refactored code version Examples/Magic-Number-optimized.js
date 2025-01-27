const TAX_RATE = 0.08;

function calculateTax(order) {
    return order.total * TAX_RATE;
}