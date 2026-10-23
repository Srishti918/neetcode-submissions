/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
         const dummy = { val: 0, next: head };

    let fast = dummy;
    let slow = dummy;

    // Step 1: Move fast n nodes ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Step 2: Move both pointers until fast reaches the last node
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 3: Remove the nth node from the end
    slow.next = slow.next.next;

    return dummy.next;
    }
}
