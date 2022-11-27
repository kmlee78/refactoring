class Site {
    get customer() { return this._customer; }
}
class Customer {
    get name() { return this._name; }
    get billingPlan() { return this._billingPlan; }
    set billingPlan(arg) { this._billingPlan = arg; }
    get paymentHistory() { return this._paymentHistory; }
}

// Client 1
const aCustomer = site.customer;
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

// Client 2
const plan = (aCustomer === "unknown") ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

// Client 3
if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

// Client 4
const weeksDelinquent = (aCustomer === "unknown") ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;


/*------------------------refactoring-------------------------*/


class NullPaymentHistory {
    get weeksDelinquentInLastYear() { return 0; }
}
class UnknownCustomer {
    get name() { return "occupant"; }
    get billingPlan() { return registry.billingPlans.basic; }
    set billingPlan(arg) { }
    get paymentHistory() { return new NullPaymentHistory(); }
}
class Site {
    get customer() {
        return (this._customer === "unknown") ?
            new UnknownCustomer()
            : this._customer;
    }
}

// Client 1
const customerName = aCustomer.name;
// Client 2
const plan = aCustomer.billingPlan;
// Client 3
const aCustomer.billingPlan = newPlan;
// Client 4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;