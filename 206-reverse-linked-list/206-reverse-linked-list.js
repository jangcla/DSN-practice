/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let temp = null;
    
    let current = head;
    while (current !== null) {
        let next = current.next;   
        current.next = temp;

        temp = current;
        current = next;
    }
    
    return temp;
};