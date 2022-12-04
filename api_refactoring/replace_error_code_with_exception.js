function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else retun - 23;
}

function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
    if (shippingRules < 0) return shippingRules;
    // ...
}

const status = calculateShippingCosts(orderData);
if (status < 0) errorList.push({ errorCode: status, order: orderData });


/*------------------------refactoring-------------------------*/


class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(errorCode);
        this.code = errorCode;
    }
    get name() { return "OrderProcessingError"; }
}

function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError("no rules for this country");
}

function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
    // ...
}

try {
    calculateShippingCosts(orderData);
} catch (e) {
    if (e instanceof OrderProcessingError)
        errorList.push({ errorCode: e.code, order: orderData });
    else throw e;
}