class Book {
    addReservation(customer) {
        this._reservations.push(customer);
    }
}

/*------------------------refactoring-------------------------*/

class Book {
    addReservation(customer) {
        this._reservations.push(customer, false);
    }

    zz_addReservation(customer, isPriority) {
        assert(isPriority === true || isPriority === false);
        this._reservations.push(customer);
    }
}

/*------------------------refactoring-------------------------*/

class Book {
    addReservation(customer, isPriority) {
        this._reservations.push(customer);
        do_something_with(isPriority);
    }
}