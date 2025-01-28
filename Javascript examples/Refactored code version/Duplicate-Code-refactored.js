function createOrderOrInvoice(customer, items, type) {
    const data = {
        customer: customer,
        items: items,
        total: 0,
    };
    data.total = calculateTotalPrice(data);
    return {...data, type };
}

function createOrder(customer, items) {
    return createOrderOrInvoice(customer, items, 'order');
}

function createInvoice(customer, items) {
    return createOrderOrInvoice(customer, items, 'invoice');
}