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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        
        const result = [];
        const queue = [root];
        let index = 0;

        while (index < queue.length) {
            const level = [];
            const size = queue.length - index;

            for (let i = 0; i < size; i++) {
                const node = queue[index++];

                level.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            result.push(level);
        }

        return result;
    }
}
