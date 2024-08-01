function removeDuplicate(nums) {
  const set = new Set(nums) //Set(5) { 0, 1, 2, 3, 4 }
  const newNums = Array.from(set)
  for (let i = 0; i < newNums.length; i++) {
    nums[i] = newNums[i]
  }
  console.log(nums)
  return newNums.length

  //   方法2
  //  for(let i = 1; i < nums.length; i++) {
  //     if(nums[i-1] == nums[i]) {
  //       nums.splice(i, 1);
  //       i--;
  //     }
  //   }
  //   return nums.length;

  //
  //双指针
  //因为数组是有序的，所以重复的元素一定相邻
  //   const n = nums.length
  //   if (n === 0) {
  //     return 0
  //   }
  //   //设置快慢指针，快指针用于便利数组元素从1-n-1，慢指针用于指定下一个不同的元素要填入的下标位置
  //   let fast = 1
  //   let slow = 1
  //   while (fast < n) {
  //     if (nums[fast] !== nums[fast - 1]) {
  //       nums[slow] = nums[fast]
  //       slow++
  //     }
  //     fast++
  //   }
  //   return slow
}
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
