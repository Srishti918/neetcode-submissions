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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

    // Step 1: Find the middle
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let second = slow.next;
    slow.next = null;

    let prev = null;
    let current = second;

    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    second = prev;

    // Step 3: Merge the two halves
    let first = head;

    while (second) {
        const firstNext = first.next;
        const secondNext = second.next;

        first.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
    }
}
