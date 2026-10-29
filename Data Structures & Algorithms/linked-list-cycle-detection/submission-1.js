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
     * @return {boolean}
     */
    hasCycle(head) {
    // const visited = new Set();

    // let current = head;

    // while (current !== null) {
    //     if (visited.has(current)) {
    //         return true;
    //     }

    //     visited.add(current);
    //     current = current.next;
    // }

    // return false;
    
    let fast=head;
    let slow=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast) return true;
    }
    return false;
    }
}
