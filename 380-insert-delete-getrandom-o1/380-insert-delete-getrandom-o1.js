
// var RandomizedSet = function() {
//     this.
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function(val) {
    
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
    
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {
    
// };

// /** 
//  * Your RandomizedSet object will be instantiated and called as such:
//  * var obj = new RandomizedSet()
//  * var param_1 = obj.insert(val)
//  * var param_2 = obj.remove(val)
//  * var param_3 = obj.getRandom()
//  */

class RandomizedSet {
    constructor() {
        this.set = {};
        this.length = 0;
    }
    
    insert(val) {
        if (this.set[val] !== undefined) return false;
        
        this.set[val] = val;
        this.length++;
        
        return true;
    }

    remove (val) {
        if (this.set[val] === undefined) return false;
        this.length--;
        
        return delete this.set[val];
    }
    
    getRandom () {
        const getRandomInt = (max) => {
          return Math.floor(Math.random() * max);
        }
        
        let i = getRandomInt(this.length);
        return Object.values(this.set)[i];
    }
    
}