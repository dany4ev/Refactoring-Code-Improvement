function createOrder(customer, items) {
    const order = {
        customer: customer,
        items: items,
        total: 0,
    };
    order.total = calculateTotalPrice(order);
    return order;
}

function createInvoice(customer, items) {
    const invoice = {
        customer: customer,
        items: items,
        total: 0,
    };
    invoice.total = calculateTotalPrice(invoice);
    return invoice;
}