function createTask(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 1 success', 1000 * seconds)
    }, 1000 * seconds)
  })
}

let tasks = [1, 2, 3].map(createTask)

//串行处理异步操作

let p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log('promise 1 success', 1000)
      resolve('promise 1 success')
    }, 1000)
  })
}

let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 1 success')
    }, 2000)
  })
}

let p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 1 success')
    }, 3000)
  })
}

p1()
  .then(() => {
    //获取到的是异步操作成功时候的结果
    // console.log('p1', p1())
    return p1()
  })
  .then((p1Result) => {
    console.log('in p2:', p1Result)
    return p2()
  })

//   only all promises are the resolved status, can return the resolved results
// promise return value is array which consists of the result of each promise resolved result
Promise.all(tasks).then((results) => {
  console.log('promise all: ', results)
})

//对于promise.all 并发执行的promise数量是固定的
