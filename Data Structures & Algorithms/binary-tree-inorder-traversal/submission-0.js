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
    inorderTraversal(root) {
        if (!root) return [];

        const result = [];

        function inorder(node) {
            if (!node) return;

            inorder(node.left);
            result.push(node.val);
            inorder(node.right);
        }

        inorder(root);

        return result;
    }
}
