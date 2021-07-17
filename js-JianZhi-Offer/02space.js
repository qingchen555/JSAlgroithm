/* 
需求：
将字符串中的所有空格替换成“%20”
*/
function replaceSpace(str){
  return str.replace(/ /g,'%20');
}
let str='hello world be nice '
console.log(replaceSpace(str));
