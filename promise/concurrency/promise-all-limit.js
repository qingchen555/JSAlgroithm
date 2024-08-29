// 假设已有一个连接池对象 connectionPool，包含了可用连接的队列

const processRequest = async (request) => {
  console.log('Sending request:', request)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return request
}

const callback = (request) => {
  console.log('Request completed:', request)
}

const requestList = ['1', '2', '3', '4', '5']

function sendRequest(requestList, limits, callback) {
  const sendLimitedRequests = async () => {
    while (requestList.length > 0) {
      const limitedRequests = requestList.splice(0, limits)
      const promises = limitedRequests.map((request) => processRequest(request))
      const results = await Promise.all(promises)
      results.forEach((result) => {
        callback(result) // 请求完成后调用回调函数
      })
    }
    callback() // 所有请求完成后调用回调函数
  }

  sendLimitedRequests().catch((error) => {
    console.error('Error occurred:', error)
  })
}
sendRequest(requestList, 2, callback)
/**
 * 代码解释:

定义了一个异步函数 processRequest，用于执行单个请求的逻辑。在这个示例中，使用 console.log 来模拟实际的请求，然后使用 setTimeout 来模拟异步请求的延迟，并返回请求本身作为结果。
定义了一个异步函数 sendLimitedRequests，用于控制并发请求的数量。
在一个循环中，检查 requestList 数组是否还有待处理的请求。
使用 splice 方法从 requestList 数组中截取 limits 个请求，形成一个新的数组 limitedRequests，表示当前限制的请求数量。
使用 map 方法遍历 limitedRequests 数组，将每个请求传入 processRequest 函数中执行，返回一个 Promise 数组 promises。
使用 Promise.all 方法，传入 promises 数组，等待所有请求的 Promise 都完成，并将它们的结果保存在 results 数组中。
使用 forEach 方法遍历 results 数组，对每个请求的结果调用回调函数 callback。
重复步骤 3 到步骤 7，直到 requestList 数组中的所有请求都被处理完毕。
当所有请求完成后，调用回调函数 callback，此时传递的参数为空，表示所有请求都已完成。
在调用 sendLimitedRequests 函数时，使用 catch 方法捕获可能发生的错误，并将错误信息打印到控制台。
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/m0_51403152/article/details/130564930
 */
