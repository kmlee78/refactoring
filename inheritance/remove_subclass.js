class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get genderCode() { return "X"; }
}

class Male extends Person {
    get genderCode() { return "M"; }
}

class Female extends Person {
    get genderCode() { return "F"; }
}

const numberOfMales = people.filter(p => p instanceof Male).length;


/*------------------------refactoring-------------------------*/


class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }
    get name() { return this._name; }
    get isMale() { return this._genderCode === "M"; }
}

const numberOfMales = people.filter(p => p.isMale).length;