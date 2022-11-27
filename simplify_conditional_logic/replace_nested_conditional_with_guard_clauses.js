function payAmount(employee) {
    let result;
    if (employee.isSeparated) {
        result = { amount: 0, reasonCode: "SEP" };
    }
    else {
        if (employee.isRetired) {
            result = { amount: 0, reasonCode: "RET" };
        }
        else {
            result = someFinalComputation();
        }
    }
    return result;
}


/*------------------------refactoring-------------------------*/


function payAmount(employee) {
    if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
    if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
    return someFinalComputation();
}