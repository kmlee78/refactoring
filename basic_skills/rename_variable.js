let tpHd = "untitled";
result += `<h1>${tpHd}</h1>`;
tpHd = obj["articleTitle"];


/*------------------------refactoring-------------------------*/


result += `<h1>${title()}</h1>`;

function title() { return tpHd; }
function setTitle(arg) { tpHd = arg; }
setTitle(obj["articleTitle"]);


/*------------------------refactoring-------------------------*/


let _title = "untitled";
function title() { return _title; }
function setTitle(arg) { _title = arg; }