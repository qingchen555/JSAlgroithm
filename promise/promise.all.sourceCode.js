//promise all作用：
//接收一个Promise数组，等所有Promise都执行完成，返回一个Promise并带着结果
//如果所有promise都成功， 则按顺序返回一个结果组成的数组，并且返回的promise是成功
//如果Promise中有一个失败，则返回这个失败，并且Promise返回的失败

//实际应用场景：
//数据加载和合并： 需要从多个来源加载数据并将其合并，使用promise all可以在所有数据加载完成后进行合并
//批量请求：并行发起所有请求

const promiseAll = (promises) => {
  const promiseList = [...promises]
  return new Promise((resolve, reject) => {
    if (promiseList.length === 0) return resolve([])
    var resolveCount = 0 //记录
    var result = []

    promiseList.forEach((promise, i) => {
      //promise 不一定是一个promise对象
      //所以需要使用Promise.resolve(): 返回一个已经解析的Promise对象
      Promise.resolve(promise).then(
        (value) => {
          result.push(value)
          resolveCount++

          if (resolveCount === promiseList.length) {
            resolve(result)
          }
        },
        (reason) => {
          reject(reason)
        }
      )
    })
  })
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 1 resolved')
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 2 resolved')
  }, 500)
})

// 测试
const promise11 = Promise.resolve(5)
const promise22 = 4
const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 100, 'AK、DADADA')
  setTimeout(resolve, 1000, 'promise resolved')
})

promiseAll([promise11, promise22, promise3])
  .then((results) => {
    console.log('promise all result:', results)
  })
  .catch((error) => {
    console.log('promise all result:', error)
  })
