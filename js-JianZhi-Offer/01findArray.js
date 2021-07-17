/* 
   二维数组：
   每一行从左到右递增的顺序排序
   每一列按照从上到下递增的顺序排序
   在这样的二维数组中，搜索一个整数是否存在

   1 2
   2 4 5
   4 5 6 7
   所以，要明确每一行有多少元素array[i].length
*/
/* 
思想：
从最后一行、第一列开始对比
*/


function Find(target,array){
  var rowCount=array.length-1,i,j;
  for(i=rowCount,j=0;i>=0&&j<array[i].length;){
     if(target === array[i][j]){
       return true;
     }else if(target>array[i][j]){
       j++;
       continue;
     }else if(target<array[i][j]){
      i--;
      continue;
     }
  }
  return false;
}
let arr=[[1,2],[2,3,4],[3,4,5,6]];
let target=0;
console.log(Find(target,arr));