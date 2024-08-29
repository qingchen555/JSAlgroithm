//代码参考链接： https://www.cnblogs.com/echolun/p/15913303.html
//背景： 控制并发请求的个数为3，最后输出所有请求完成后所需消费的总时间
//并发：多个任务在同一时间段内交替执行
const time = [1, 3, 4, 2, 1]
// 假设请求API为
function request(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(params), time * 1000)
  })
}

// 最多处理3个请求的调度器
function Scheduler(list = [], limit = 3) {
  let count = 0

  // 浅拷贝一份，原数据的length我们还有用
  const pendingPromises = [...list]
  const resList = []

  return new Promise((resolve, reject) => {
    if (pendingPromises.length === 0) return resolve(0)

    pendingPromises.forEach

    if (count === pendingPromises.length) {
      resolve(totalTime)
    }
  })
}

Scheduler([1, 2, 3, 4, 5]).then((res) =>
  console.log('最终消耗的总时间为:', res)
) // 1 2 3 4 5
