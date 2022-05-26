/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
  // need to itterate through the linked list 
 //  if a child pointer is found, traverse through the child linked list first
//   store the original next pointer to not lose the data
var flatten = function(head) {
    if (!head) return null;
    
    let current = head;
    const temporary = [];
    
    while (current !== null) {
        if(current.child !== null) {
            if(current.next)temporary.push(current.next);
            current.next = current.child;
            current.child.prev = current;
        }
        
        if(!current.next && temporary.length > 0) {
            const next = temporary.pop();
            current.next = next;
            next.prev = current;
        }
        
        current.child = null;   
        current = current.next;
    }
    return head;
};
