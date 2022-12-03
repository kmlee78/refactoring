class Employee {
    constructor(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }
    get name() { return this._name; }
    get type() { return Employee.legalTypeCodes[this._typeCode]; }
    static get legalTypeCodes() { return { 'E': 'Engineer', 'M': 'Manager', 'S': 'Salesman' }; }
}

candidate = new Employee(document.name, document.empType);


/*------------------------refactoring-------------------------*/


function createEmployee(name) {
    return new Employee(name, 'E');
}

const leadEngineer = createEmployee(document.leadEngineer);