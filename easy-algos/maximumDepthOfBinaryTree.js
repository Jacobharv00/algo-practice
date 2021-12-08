/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */

// Fastest Baby using recursion! 76ms Runtime and 41.7 MB Memory
var maxDepth = function ( root ) {
  if ( !root ) return null
  return Math.max( maxDepth( root.left ), maxDepth( root.right ) ) + 1
}


// Good Solution #1
// var maxDepth = function(root) {
//     if(!root) return null;
//     let max = Math.max(maxDepth(root.left), maxDepth(root.right));
//     return max + 1;
// }


//Good Solution #2 
// var maxDepth = function(root) {
//     if (root === null) return 0
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// };