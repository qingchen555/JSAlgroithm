//如果我有几十个请求同时并发，我限制每次只会处理三个请求
//为什么没有直接用return promise，是因为直接return new promise，后面的callback没办法执行
const processRequest = async (request) => {
  console.log('Sending request:', request)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  callback(request)
}
const requestList = ['request1', 'request2', 'request3', 'request4', 'request5']

// 回调函数：记录请求是否完成
const callback = (request) => {
  console.log('Request completed:', request)
}

async function sendRequest(requestList, limits, callback) {
  // 创建一个计数器，用于限制并发请求数量
  let counter = 0
  // 并发控制函数
  const controlConcurrency = async () => {
    while (counter < limits && requestList.length > 0) {
      const request = requestList.shift() // 取出下一个请求
      counter++
      await processRequest(request)
      counter--
    }

    // 检查是否还有未完成的请求
    if (counter === 0 && requestList.length === 0) {
      callback() // 所有请求完成后调用回调函数
    }
  }

  // 启动并发控制
  for (let i = 0; i < limits; i++) {
    controlConcurrency()
  }
}

// 发送请求
sendRequest(requestList, 2, callback)
