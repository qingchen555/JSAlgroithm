function all(promises) {
  return new Promise(function (resolve, reject) {
    //传入参数为一个空的可迭代对象，直接resolve
    if (promises.length === 0) {
      resolve([])
    } else {
      const res = []
      let count = 0
      for (let i = 0; i < promises.length; i++) {
        //为什么不直接promise[i].then, 因为promise[i]可能不是一个promise,
        // 也可能是普通值
        Promise.resolve(promises[i])
          .then((data) => {
            res[i] = data
            count++
            if (count === promises.length) {
              resolve(res) //如果所有Promise都成功，则返回成功结果数组
            }
          })
          .catch((err) => {
            reject(err) //如果有一个Promise失败，则返回这个失败结果
          })
      }
    }
  })
}
// 测试
const promise1 = Promise.resolve(5)
const promise2 = 4
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'AK、DADADA')
})

all([promise1, promise2, promise3]).then((values) => {
  console.log(values) //[5, 4, "AK、DADADA"]
})
