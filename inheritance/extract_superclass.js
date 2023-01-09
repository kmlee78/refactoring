class Employee {
    constructor(name, id, monthlyCost) {
        this._name = name;
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    get name() { return this._name; }
    get id() { return this._id; }
    get monthlyCost() { return this._monthlyCost; }
    get annualCost() { return this.monthlyCost * 12; }
}

class Department {
    constructor(name, staff) {
        this._name = name;
        this._staff = staff;
    }
    get name() { return this._name; }
    get staff() { return this._staff.slice(); }
    get totalMonthlyCost() {
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost);
    }
    get headCount() { return this.staff.length; }
    get totalAnnualCost() { return this.totalMonthlyCost * 12; }
}


/*------------------------refactoring-------------------------*/


class Party {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get annualCost() { return this.monthlyCost * 12; }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    get id() { return this._id; }
    get monthlyCost() { return this._monthlyCost; }
}

class Department extends Party {
    constructor(name, staff) {
        super(name);
        this._staff = staff;
    }
    get staff() { return this._staff.slice(); }
    get totalMonthlyCost() {
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost);
    }
    get headCount() { return this.staff.length; }
}