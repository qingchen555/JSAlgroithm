//每隔一秒打印一次
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, i * 1000)
// }

//使用闭包
for (let i = 0; i < 5; i++) {
  ;(function (j) {
    setTimeout(() => {
      console.log(j)
    }, j * 1000)
  })(i)
}
