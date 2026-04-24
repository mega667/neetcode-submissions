class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let rest = target - nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (rest === nums[j]) {
                    return [i, j];
                }
            }
        }
    }
}

const nums = [4,5,6], target = 10;
var result = new Solution().twoSum(nums, target);
