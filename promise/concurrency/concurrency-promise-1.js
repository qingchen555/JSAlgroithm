const onSubmitHandle = (e) => {
  e.preventDefault() //防止触发原生submit，导致浏览器页面的刷新
  validateFields((err, values) => {
    if (!err) {
      const arrParam = concateDynamicParams(values)
      concurrentControl(arrParam, 5).then((res) => {
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
