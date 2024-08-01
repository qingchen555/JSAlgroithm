function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  const newNums1 = nums1.slice(0, m + 1)
  console.log(newNums1)
  console.log(...nums2)
  //nums1.push(nums2[i])
  //想法1:直接将nums2放到nums1，然后排序

  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
  return nums1
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
