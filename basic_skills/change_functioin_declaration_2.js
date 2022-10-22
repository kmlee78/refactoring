function inNewEngland(aCustomer) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}
const newEnglanders = someCustomers.filter(c => inNewEngland(c));

/*------------------------refactoring-------------------------*/

function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state;
    return xxNewEnglanders(stateCode);
}
function xxNewEnglanders(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
const newEnglanders = someCustomers.filter(c => inNewEngland(c));

/*------------------------refactoring-------------------------*/

function inNewEngland(aCustomer) {
    return xxNewEnglanders(aCustomer.address.state);
}
function xxNewEnglanders(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
const newEnglanders = someCustomers.filter(c => xxNewEnglanders(c.address.state));

/*------------------------refactoring-------------------------*/

function inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));