/* 
    需求：输入一个整数n，输出斐波那契数列的第n项，n<=39

    思想：
    斐波那契数列第一个数字1.第二个1，第三个开始将两项相加
    第n个就是n-1和n-2项相加
*/
function Fibonacci(n){
  // 方法1：
  // if(n<=0){
  //   return 0
  // }else if(n==1||n==2){
  //    return 1;
  // }else{
  //   return  Fibonacci(n-1)+Fibonacci(n-2)
  // }
// 方法2：
var a = 1, b = 1, temp;
    if(n <= 0) return 0;
    for(var i = 2; i <= n; i++){
      temp = b;
      b = a + b;
      a = temp;
    }
    return a;

}

console.log(Fibonacci(3));
