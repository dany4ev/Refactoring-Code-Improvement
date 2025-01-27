function calculateTotalPrice(order) {
    const subtotal = calculateSubtotal(order);
    const discount = calculateDiscount(order);
    const tax = calculateTax(order, subtotal);
    return subtotal - discount + tax;
}

function calculateSubtotal(order) {
    return order.items.reduce((acc, item) => {
        if (item.type === 'product') {
            return acc + item.price * item.quantity;
        } else if (item.type === 'ervice') {
            return acc + item.price * item.duration;
        }
        return acc;
    }, 0);
}

function calculateDiscount(order) {
    return order.discount > 0? order.discount : 0;
}

function calculateTax(order, subtotal) {
    return order.taxRate > 0? subtotal * order.taxRate / 100 : 0;
}