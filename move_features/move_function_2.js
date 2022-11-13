class Account {

    get bankCharge() { // 은행 이자 계산
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get overdraftCharge() { // 초과 인출 이자 계산
        if (this.type.isPremium) {
            const baseCharge = 10;
            if (this._daysOverdrawn <= 7)
                return baseCharge;
            else
                return baseCharge + (this._daysOverdrawn - 7) * 0.85;
        } else
            return this._daysOverdrawn * 1.75;
    }
}


/*------------------------refactoring-------------------------*/


class AccountType {
    overdraftCharge(daysOverdrawn) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7)
                return baseCharge;
            else
                return baseCharge + (daysOverdrawn - 7) * 0.85;
        } else
            return daysOverdrawn * 1.75;
    }
}

class Account {
    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0)
            result += this.type.overdraftCharge(this._daysOverdrawn);
        return result;
    }
}