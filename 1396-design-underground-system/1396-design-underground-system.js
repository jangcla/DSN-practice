
var UndergroundSystem = function() {
    this.train = {};
    this.startStation = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if (this.startStation[id] === undefined) {
        this.startStation[id] = [stationName, t];
    } else {
        this.startStation[id] = [stationName, t];
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const checkInData = this.startStation[id];
    const [oldStation, oldTime] = checkInData;
    
    const distance = t - oldTime;
    
    if (this.train[`${oldStation} ${stationName}`] === undefined) {
        this.train[`${oldStation} ${stationName}`] = [distance];
    } else {
        this.train[`${oldStation} ${stationName}`].push(distance);
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const distances = this.train[`${startStation} ${endStation}`];
    
    let totalDistances = 0;
    distances.forEach((distance) => {
        totalDistances += distance;
    });
    
    const distanceAverage = (totalDistances / distances.length);
    return distanceAverage;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * v  
 */