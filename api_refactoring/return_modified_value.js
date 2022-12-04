let totalAscent = 0;
calculateAscent();

function calculateAscent() {
    for (let i = 1; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i - 1].elevation;
        if (verticalChange > 0) totalAscent += verticalChange;
    }
}


/*------------------------refactoring-------------------------*/


const totalAscent = calculateAscent();

function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i - 1].elevation;
        if (verticalChange > 0) result += verticalChange;
    }
    return result;
}