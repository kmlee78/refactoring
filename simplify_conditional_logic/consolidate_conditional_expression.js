if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;

function AND() {
    if (anEmployee.onVacation)
        if (anEmployee.seniority > 10)
            return 1;
    return 0.5;
}


/*------------------------refactoring-------------------------*/


if (isNotEligibleForDisability()) return 0;
function isNotEligibleForDisability() {
    return (
        anEmployee.seniority < 2 ||
        anEmployee.monthsDisabled > 12 ||
        anEmployee.isPartTime
    )
}

function AND() {
    if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
    return 0.5;
}