function example() {
    let result;
    if (availableResources.length === 0) {
        result = createResource();
        allocatedResources.push(result);
    } else {
        result = availableResources.pop();
        allocatedResources.push(result);
    }
    return result;
}


/*------------------------refactoring-------------------------*/


function example() {
    let result;
    if (availableResources.length === 0) {
        result = createResource();
    } else {
        result = availableResources.pop();
    }
    allocatedResources.push(result);
    return result;
}