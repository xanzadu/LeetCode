/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const arr = [root1, root2], results = []
    while (arr.length) {
        const node = arr.shift()
        if (node && node.left) arr.push(node.left) 
        if (node && node.right) arr.push(node.right) 
        if (node) results.push(node.val)
    }
    return results.sort((a, b) => a - b)
};