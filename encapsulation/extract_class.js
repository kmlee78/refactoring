class Person {
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get officeAreaCode() { return this._officeAreaCode; }
    set officeAreaCode(arg) { this._officeAreaCode = arg; }
    get officeNumber() { return this._officeNumber; }
    set officeNumber(arg) { this._officeNumber = arg; }
    get telephoneNumber() {
        return `(${this.officeAreaCode}) ${this.officeNumber}`;
    }
}


/*------------------------refactoring-------------------------*/


class TelephoneNumber {
    get areaCode() { return this._officeAreaCode; }
    set areaCode(arg) { this._officeAreaCode = arg; }
    get number() { return this._officeNumber; }
    set number(arg) { this._officeNumber = arg; }
    toString() {
        return `(${this.areaCode}) ${this.number}`;
    }
}

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { this._telephoneNumber.number = arg; }
    get telephoneNumber() {
        return this._telephoneNumber.toString();
    }
}