var UndergroundSystem = function () {
    this.train = {};
    this.startStation = {};
};


UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    if (this.startStation[id] === undefined) {
        this.startStation[id] = [stationName, t];
    } else {
        this.startStation[id] = [stationName, t];
    }
};


UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    let checkInData = this.startStation[id];
    let oldStation = checkInData[0];
    let oldTime = checkInData[1];

    let distance = t - oldTime;

    // [oldStation, oldTime] = checkInData;

    if (this.train[`${oldStation} ${stationName}`] === undefined) {
        this.train[`${oldStation} ${stationName}`] = [distance];
    } else {
        this.train[`${oldStation} ${stationName}`].push(distance);
    }
};

UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    let distances = this.train[`${startStation} ${endStation}`];

    let totalDistances = 0;

    distances.forEach((distance) => {
        totalDistances += distance;
    });

    let distanceAverage = (totalDistances / distances.length);

    return distanceAverage;
};
