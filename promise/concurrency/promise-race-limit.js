const processRequest = async (request) => {
  console.log('Sending request:', request)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return request
}

const callback = (request) => {
  console.log('Request completed:', request)
}

const requestList = ['1', '2', '3', '4', '5']

const sendRequest = (requestList, limits, callback) => {
  const requests = requestList.map((request) => processRequest(request))

  const sendLimitedRequests = async () => {
    while (requests.length > 0) {
      const limitedRequests = requests.splice(0, limits)
      const fastestPromise = Promise.race(limitedRequests)
      const result = await fastestPromise
      callback(result) // 请求完成后调用回调函数
    }
    callback() // 所有请求完成后调用回调函数
  }

  sendLimitedRequests().catch((error) => {
    console.error('Error occurred:', error)
  })
}

sendRequest(requestList, 2, callback)
