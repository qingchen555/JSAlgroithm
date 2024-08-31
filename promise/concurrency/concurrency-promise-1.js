const onSubmitHandle = (e) => {
  e.preventDefault() //防止触发原生submit，导致浏览器页面的刷新
  validateFields((err, values) => {
    if (!err) {
      const arrParams = concateDynamicParams(values)
      concurrentControl(arrParams, 5).then((res) => {
        const { sucSystem, failedSystem } = getSucAndFailedResult(res)
        const content = (
          <p>
            {'update success'}
            <br />
            {`${sucSystem}`} <br />
            {'update fail'} <br />
            {`${failedSystem}`} <br />
          </p>
        )

        Modal.info({ title: 'cure', content, oKText: 'sure' })
      })
    }
  })
}

//控制并发数，维护任务池, 每次最多只发5个请求
const concurrentControl = (arrParams, maxNum = 10) => {
  return new Promise((resolve, reject) => {
    if (!arrParams.length) resolve([])
    const results = []
    let index = 0 // records the subscript of the next interface
    let count = 0 // records the number of send data

    const request = async () => {
      if (index === arrParams.length) return
      const j = index
      const url = arrParams[j].url
      const param = arrParams[j].data
      index++

      try {
        const res = await dispatchSqlGuardSwitchProcess(url, param)
        result[j] = res
      } catch (error) {
        result[j] = error
      } finally {
        // 无论是否发生异步操作，都会被执行
        count++
        if (count === arrParams.length) {
          resolve(results)
        }
        request()() // proceed to the next request
      }
    }

    const maxParallelRequests = Math.min(maxNum, arrParams.length)
    for (let i = 0; i < maxParallelRequests; i++) {
      request()
    }
  })
}
