function discount(inputValue, quantity) {
    if (inputValue > 50) inputValue = inputValue - 2;
    if (quantity > 100) inputValue = inputValue - 1;
    return inputValue;
}


/*------------------------refactoring-------------------------*/


function discount(inputValue, quantity) {
    let result = inputValue;
    if (inputValue > 50) result -= 2;
    if (quantity > 100) result -= 1;
    return result;
}