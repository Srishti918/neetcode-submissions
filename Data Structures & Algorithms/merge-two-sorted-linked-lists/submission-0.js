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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
          const values = [];

    let current = list1;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    current = list2;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    values.sort((a, b) => a - b);

    const dummy = new ListNode(0);
    let tail = dummy;

    for (const value of values) {
        tail.next = new ListNode(value);
        tail = tail.next;
    }

    return dummy.next;
    }
}
