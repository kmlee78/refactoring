function example() {
    let youngest = poeple[0] ? poeple[0].age : Infinity;
    let totalSalary = 0;
    for (const p of poeple) {
        if (p.age < youngest) youngest = p.age;
        totalSalary += p.salary;
    }
    return { youngest, totalSalary };
}


/*------------------------refactoring-------------------------*/


function example() {
    let youngest = poeple[0] ? poeple[0].age : Infinity;
    let totalSalary = 0;
    for (const p of poeple) {
        if (p.age < youngest) youngest = p.age;
    }
    for (const p of poeple) {
        totalSalary += p.salary;
    }
    return { youngest, totalSalary };
}


/*------------------------refactoring-------------------------*/


function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
}
function youngestAge() {
    return Math.min(...people.map(p => p.age));
}