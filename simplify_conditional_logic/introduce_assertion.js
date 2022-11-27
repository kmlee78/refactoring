class Customer {
    applyDiscount(aNumber) {
        return (this._discountRate) ?
            aNumber - this._discountRate * aNumber
            : aNumber;
    }
}


/*------------------------refactoring-------------------------*/


class Customer {
    applyDiscount(aNumber) {
        if (!this._discountRate) return aNumber;
        else {
            assert(this._discountRate >= 0);
            return aNumber - this._discountRate * aNumber;
        }
    }
    set discountRate(aNumber) {
        assert(null === aNumber || aNumber >= 0);
        this._discountRate = aNumber;
    }
}