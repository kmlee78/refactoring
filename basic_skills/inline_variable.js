function ex() {
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000);
}


/*------------------------refactoring-------------------------*/


function ex() {
    return (anOrder.basePrice > 1000);
}