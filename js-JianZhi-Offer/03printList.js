/* 
需求：
输入一个链表，从尾到头打印链表的每个节点
*/
/* 
思路：
*/
// 节点构造函数
class Node{
  constructor(value,next){
    this.value=value;
    this.next=next;
  }
}

class List{
  constructor(){
    this.head=new Node(null,null);// 创建一个空节点
  }

  //从0开始计算，找到包括head在内的位于index的节点
  find(index){
    let current=this.head;
    for(let i=0;i<index;++i){
      current =current.next;
    }
    return current;
  }

  //
  insert(value, index){
    const prev=this.find(index);
    const next =new Node(value,prev.next);
    prev.next=next;
  }
}

//

function printFromTailToHead(node) {
  if (node.next) {
    printFromTailToHead(node.next);
  }
  node.value && console.log(node.value);
}

// function printListFormTailToHead(head){
//   if(!head){
//     return 0;
//   }else{
//     var arr=new Array();
//     var curr=head;
//     while(curr){
//       arr.push(curr.val);
//       curr=curr.next;
//     }
//     return arr.reverse();
//   }
// }

let list=new List();
list.insert("a",0);
list.insert("b",1);
list.insert("c",2);


console.log(printFromTailToHead(list.head));