function alertForMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "Don";
        }
        if (p === "John") {
            setOffAlarms();
            return "John";
        }
    }
    return "";
}

const found = alertForMiscreant(people);


/*------------------------refactoring-------------------------*/


function alertForMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "";
        }
        if (p === "John") {
            setOffAlarms();
            return "";
        }
    }
    return "";
}

function findMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            return "Don";
        }
        if (p === "John") {
            return "John";
        }
    }
    return "";
}

const found = findMiscreant(people);
alertForMiscreant(people);