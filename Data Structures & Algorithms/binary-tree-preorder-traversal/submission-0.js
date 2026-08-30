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
     * @return {number[]}
     */
    preorderTraversal(root) {
        if (!root) return [];

        const result = [];

        function preorder(node) {
            if (!node) return;

            result.push(node.val);
            preorder(node.left);
            preorder(node.right);
        }

        preorder(root);

        return result;
    }
}
