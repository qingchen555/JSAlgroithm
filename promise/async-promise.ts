//定义一个类型
type Task = Promise<void>

function createTask(seconds: number) {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('time')
        resolve(seconds)
      }, seconds * 1000)
    })
  }
}

const tasks = [2, 6, 1, 6, 8, 7, 20, 3, 5, 9].map(createTask)

async function runtimeAllTask(tasks: Task[], limit: number) {
  //计算出10个异步请求需要消费的时间
  //limit表示一次可以并发执行的异步请求
}

runtimeAllTask(tasks, 3).then((result) => {
  console.log('time is', result)
})
