//promise. race :
//接收一个promise数组作为参数，返回一个新的Promise对象
// 只要Promise数组中有一个promise对象变成fulfilled 或者rejected，该方法返回的就是第一个变状态的promise对象resolve或者reject的结果
// 使用场景
// 数据缓存： 在需要从多个数据源获取数据的情况下，可以使用promise race获取最快返回的数据，提高性能和响应速度

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promnise race 1 resolved')
  })
}, 1000)
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promnise race 2 resolved')
  })
}, 5000)

Promise.race([promise2, promise1])
  .then((result) => {
    console.log('promise race result:', result)
  })
  .catch((error) => {
    console.log('promise race error:', error)
  })
