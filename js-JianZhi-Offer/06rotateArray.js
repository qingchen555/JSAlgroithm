/* 
需求：
输入一个非递减排序的一个旋转
输出旋转数组的最小元素


知识点：
Math.min.apply(null,arr):获取数组中最小值
Math.max.apply(null,arr):获取数组中最大值

apply的用法：将数组转换为一个参数列表
因为min和max只能接收任意多个参数

对于null这个对象，因为在调用的时候，第一个参数给了一个null，因为没有对象去调用这个方法

*/

function minNumRotateArray(rotateArr){
    var len=rotateArr.length;
    if(len===0){
      return 0;
    }
    return Math.min.apply(null,rotateArr);
}
