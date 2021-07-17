/* 
    用两个栈实现一个队列，完成队列的push和pop操作
    队列中的元素为int类型
    栈：先入后出
    队列：先进先出
    
    知识点：
    
    栈：
    push操作：从顶端插入一个元素
    pop操作：弹出顶端的元素

    队列：
     push操作：从队尾插入一个元素
    pop操作：弹出队头的元素
*/
var stack1=[];
var stack2=[];
//
function push(node){
     stack1.push(node);//[1,2,3,4]
}

 function pop() {
   var temp=stack1.pop();
   while(temp){
        stack2.push();//[4,3,2,1]
        temp=stack1.pop();
   }
   var result=stack2.pop();
   while(result){
       stack1.push();//[1,2,3,4]
       result=stack2.pop();
   }
   return result;
 }