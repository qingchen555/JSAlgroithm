function twoSum(numbers: number[], target: number): number[] {
  //有序数组，使用双指针
  let left = 0,
    right = numbers.length - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left, right]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

console.log(twoSum([1, 2, 3, 4, 5], 6))
