/** this：
 *
 * myReduce匿名函数
 */

Array.prototype.myReduce = function (callback, initialValue) {
  const arr = this //this 就是调用reduce的数组

  let total = initialValue ? initialValue : arr[0]
  let startIndex = initialValue ? 0 : 1
  for (let i = startIndex; i < arr.length; i++) {
    total = callback(total, arr[i], i, arr)
  }

  return total
}

// 测试
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res = arr.myReduce((total, cur) => {
  return total + cur
}, 0)
console.log(res) //55
