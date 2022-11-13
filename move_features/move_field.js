class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._discountRate = discountRate;
        this._contract = new CustomerContract(dateToday());
    }
    get discountRate() { return this._discountRate; }
}

class CustomerContract {
    constructor(startDate) {
        this._startDate = startDate;
    }
}


/*------------------------refactoring-------------------------*/


class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(dateToday());
        this._setDiscountRate(discountRate);
    }
    get discountRate() { return this._contract.discountRate; }
    _setDiscountRate(aNumber) { this._contract.discountRate = aNumber; }
}

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }
    get discountRate() { return this._discountRate; }
    set discountRate(arg) { this._discountRate = arg; }
}