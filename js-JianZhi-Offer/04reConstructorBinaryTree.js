/* 
需求：
根据二叉树的前序遍历和中序遍历的结果
重建出该二叉树
 */

function TreeNode(x){
  this.val=x;
  this.left=null;
  this.right=null;
}
function reConstructBinaryTree(pre,vin) {
  if(pre.length===0 || vin.length===0){
    return null;
  }

  var index=vin.indexOf(pre[0]);//先序遍历中第一个值在中序遍历中首次出现的位置
  var left =vin.slice(0,index);//然后将index左边的数组单独作为一个数组
  var right =vin.slice(index+1);//然后将index右边的数组单独作为一个数组
 
  var node=new TreeNode(vin[index]);
  node.left=reConstructBinaryTree(pre.slice(1,index+1),left);
  node.right=reConstructBinaryTree(pre.slice(index+1),right);
  return node;
}
let pre=[1,2,4,7,3,5,6,8];
let vin=[4,7,2,1,5,3,8,6];
console.log(reConstructBinaryTree(pre,vin));
/* 
打印的结果：
TreeNode {
  val: 1,
  left: TreeNode {
    val: 2,
    left: TreeNode { val: 4, left: null, right: [TreeNode] },
    right: null
  },
  right: TreeNode {
    val: 3,
    left: TreeNode { val: 5, left: null, right: null },
    right: TreeNode { val: 6, left: [TreeNode], right: null }
  }
}

*/