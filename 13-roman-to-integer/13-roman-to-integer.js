/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000
    };
    
    let num = 0;
    
    for (let i = 0; i < s.length; i++) {
        let negative = false;
        
        const current = s[i];
        const next = s[i + 1];
        
        if (current === "I") {
            if (next === "V" || next === "X"){
                negative = true;
            } 
        } else if (current === "X") {
            if (next === "L" || next === "C") {
                negative = true;
            }
        } else if (current === "C") {
            if (next === "D" || next === "M"){
                negative = true;
            } 
        }
          
        num += negative ? -roman[current] : roman[current];
    }
    
    return num;
};