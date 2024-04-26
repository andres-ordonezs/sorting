/** Sort in-place and return sorted array. */

function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
      }

      if (nums[i] !== min) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums;
}

export {selectionSort};
