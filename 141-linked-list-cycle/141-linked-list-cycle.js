/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const visited = new Set();
  
  let current = head;
  while (current !== null) {
    if (visited.has(current)) return true;
    visited.add(current);
    
    current = current.next;
  }
  
  return false;
};