let defaultOwner = { firstName: "Kyungmin", lastName: "Lee" };


/*------------------------refactoring-------------------------*/


let defaultOwnerData = { firstName: "Kyungmin", lastName: "Lee" };
export function defaultOwner() { return defaultOwnerData; }
export function setDefaultOwner(arg) { defaultOwnerData = arg; }