function findDuplicates(nums) {
  let i = 0;
  let duplicateArr = [];
  while (i < nums.length) {
    let value = nums[i];
    let correctIndex = value - 1;
    if (nums[correctIndex] !== value) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateArr.push(nums[i]);
    }
  }

  return duplicateArr;
}

// console.log(findDuplicates([3, 4, 4, 5, 5]));
// console.log(findDuplicates([1, 2, 1]));
// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

module.exports = findDuplicates;
