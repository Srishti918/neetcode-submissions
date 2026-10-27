/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
    if (!root) return null;

    const queue = [root];
    let index = 0;

    while (index < queue.length) {
        const node = queue[index++];

        // Swap left and right children
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
    }
}
