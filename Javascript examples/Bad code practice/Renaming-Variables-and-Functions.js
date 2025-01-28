// Before refactoring
function calcTotPrice(items) {
    let totPrice = 0;
    for (let i = 0; i < items.length; i++) {
        totPrice += calcItemTot(items[i]);
    }
    return totPrice;
}

function calcItemTot(item) {
    return item.price * item.quantity;
}