/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const nodeList = {};
    let num = 1;
    
    let current = head;
    while (current !== null) {
        nodeList[num] = current;
        
        current = current.next;
        num++;
    }
    
    const key = num - n;
    if (key === 1) {
        head = head.next;
    } else {
        nodeList[key - 1].next = nodeList[key - 1].next.next;
    }
    
    
    return head;
};