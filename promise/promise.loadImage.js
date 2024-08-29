let urls = [
  'https://img0.baidu.com/it/u=2191392668,814349101&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724950800&t=6a4f3dc6f1c4fe37d615a794b80b9e98',
  'https://img0.baidu.com/it/u=2191392668,814349101&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724950800&t=6a4f3dc6f1c4fe37d615a794b80b9e98',
  'https://img0.baidu.com/it/u=2191392668,814349101&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724950800&t=6a4f3dc6f1c4fe37d615a794b80b9e98',
  'https://img0.baidu.com/it/u=2191392668,814349101&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724950800&t=6a4f3dc6f1c4fe37d615a794b80b9e98',
  'https://img0.baidu.com/it/u=2191392668,814349101&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724950800&t=6a4f3dc6f1c4fe37d615a794b80b9e98',
  'https://img0.baidu.com/it/u=2191392668,814349101&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1724950800&t=6a4f3dc6f1c4fe37d615a794b80b9e98',
]

function loadImage(url) {
  return new Promise((resolve, rejectt) => {
    const img = new Image()
    img.onload = () => {
      console.log('img load success', img)
      resolve(img)
    }

    img.onerror = () => {
      reject(new Error('load failed'))
    }

    img.src = url
    img.style.width = 200 + 'px'
    document.body.appendChild(img)
    document.body.style.textAlign = 'center'
  })
}

function limitLoad(urls, handler, limit) {
  let sequence = [...urls]
  //    let sequence = [].contact(urls)

  let promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      return index
    })
  })

  function getTotalFunc(pCollect, url) {
    return pCollect
      .then(() => {
        return Promise.race(promises)
      })
      .then((fastIndex) => {
        promises[fastIndex] = handler(url).then(() => {
          return fastIndex
        })
      })
      .catch((err, url) => {
        console.log(err, url)
      })
  }
}
