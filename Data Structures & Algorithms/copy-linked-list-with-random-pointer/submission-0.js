// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

    let current = head;

    // Step 1: Insert each copy after its original node
    while (current) {
        const copy = {
            val: current.val,
            next: current.next,
            random: null
        };

        current.next = copy;
        current = copy.next;
    }

    // Step 2: Assign random pointers to copied nodes
    current = head;

    while (current) {
        const copy = current.next;

        copy.random = current.random
            ? current.random.next
            : null;

        current = copy.next;
    }

    // Step 3: Separate original and copied lists
    current = head;
    const copiedHead = head.next;

    while (current) {
        const copy = current.next;

        current.next = copy.next;

        copy.next = copy.next
            ? copy.next.next
            : null;

        current = current.next;
    }

    return copiedHead;
    }
}
