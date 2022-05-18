/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s.length) return true;
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let last = stack[stack.length - 1];
        
        switch (last) {
            case ')' || "}" || "]":
                return false;
                
            case '(':
                if (current === ')') stack.pop();
            
                if (current !== ')') stack.push(current);
                break;
                
            case '{':
                if (current === '}') stack.pop();

                if (current !== '}') stack.push(current);  
                break;
                
            case '[':
                if (current === ']') stack.pop();

                if (current !== ']') stack.push(current);
                break;
                
            default:
                stack.push(current);
        };    
    }
    
    return !stack.length;
};
//First Attempt
/* var isValid = function(s) {
    if (!s.length) return true;
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        let current = s[i];
        let last = stack[stack.length - 1];
        
        if (last === ')' || last === "}" || last === "]") return false;
        
        // if the current value closes the last value then pop off last val
        if (last === '(') {
            if (current === ')') stack.pop();
            
            if (current !== ')') stack.push(current);
        } else if (last === '{') {
            if (current === '}') stack.pop();
            
            if (current !== '}') stack.push(current);
        } else if (last === '[') {
            if (current === ']') stack.pop();
            
            if (current !== ']') stack.push(current);
        } else {
            stack.push(current);
        }
        
        // if the current value doesn't close the last then add on top
        
    }
     return !stack.length
}
*/