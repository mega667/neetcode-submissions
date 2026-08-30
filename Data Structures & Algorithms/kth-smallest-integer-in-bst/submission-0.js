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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let answer;
        let count = 0;

        function inorder(node) {
            if (!node || answer !== undefined) return;

            inorder(node.left);
            
            count++;

            if (count === k) {
                answer = node.val;
                return;
            }

            inorder(node.right);
        }

        inorder(root);

        return answer;
    }
}
