type P = Promise<number>
async function addTwoPromises(promise1: P, promise2: P): P {
  // promise.all
  //   try {
  //     const [res1, res2] = await Promise.all([promise1, promise2])
  //     return res1 + res2
  //   } catch (error) {
  //     throw error
  //   }

  try {
    //    return await promise1+ await promise2
    return promise1.then((value) => promise2.then((value2) => value + value2))
  } catch (error) {
    throw error
  }
}
console.log(
  addTwoPromises(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(8)
      }, 10)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(9)
      }, 50)
    })
  )
)
