let found = false;
for (const p of people) {
    if (!found) {
        if (p === "Don") {
            sendAlert();
            found = true;
        }
        if (p === "John") {
            sendAlert();
            found = true;
        }
    }
}


/*------------------------refactoring-------------------------*/


function checkForMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            sendAlert();
            return;
        }
        if (p === "John") {
            sendAlert();
            return;
        }
    }
}