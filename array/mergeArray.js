function mergeArrays(arr1, arr2) {
  let i = 0,
    j = 0
  const merged = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j))
}

console.log([1, 2, 3].concat([2, 3, 4]).sort((a, b) => a - b))

// expect value: [1,2,3,4]
