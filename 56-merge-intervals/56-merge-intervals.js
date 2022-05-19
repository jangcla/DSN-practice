/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    const merged = [ intervals[0] ];
    
    for (let i = 1; i < sorted.length; i++) {
        const last = merged[merged.length - 1];
        const current = sorted[i];
        
        if (last[1] >= current[0]) {
            merged[merged.length - 1][1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    
    return merged;
};