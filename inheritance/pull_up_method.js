class Party { }

class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get totalAnnualCost() {
        return this.monthlyCost * 12;
    }
}


/*------------------------refactoring-------------------------*/


class Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Employee extends Party { }

class Department extends Party { }