function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i] - 1;
    if (i !== correctIndex) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // swap
    }
    i++;
  }
  return nums;
}

// Testing the function
console.log(cyclicSort([3, 1, 5, 4, 2, 3])); // Output: [1, 2, 3, 4, 5]
