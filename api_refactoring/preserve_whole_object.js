const aRoom = new HeatingPlan();
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high)) {
    alerts.push("room temperature went outside range");
}

class HeatingPlan {
    withinRange(low, high) {
        return (low >= this._temperatureFloor)
            && (high <= this._temperatureCeiling);
    }
}


/*------------------------refactoring-------------------------*/


const aRoom = new HeatingPlan();
const tempRange = aRoom.daysTempRange;
if (!aPlan.withinRange(tempRange)) {
    alerts.push("room temperature went outside range");
}

class HeatingPlan {
    withinRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        return (tempRange.low >= this._temperatureFloor)
            && (tempRange.high <= this._temperatureCeiling);
    }
}