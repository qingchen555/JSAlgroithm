function LocalImageAsync(url) {
  console.log('......')
  return new Promise((resolve, reject) => {
    var image = new Image()
    image.load = () => {
      resolve(image)
    }

    image.onerror = () => {
      reject(new Error('msg') + url)
    }

    img.src = url
  })
}
LocalImageAsync(
  'https://p2.music.126.net/AqS6yWZ4B8vuVC90TFv06g==/109951169730048270.jpg?param=100100'
)
