function calculateTotalPrice(order) {
    let totalPrice = 0;
    for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        if (item.type === 'product') {
            totalPrice += item.price * item.quantity;
        } else if (item.type === 'ervice') {
            totalPrice += item.price * item.duration;
        }
        if (order.discount > 0) {
            totalPrice -= order.discount;
        }
        if (order.taxRate > 0) {
            totalPrice += totalPrice * order.taxRate / 100;
        }
    }
    return totalPrice;
}