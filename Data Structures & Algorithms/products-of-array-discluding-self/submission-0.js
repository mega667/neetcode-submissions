class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0,
            total = 1;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                total *= nums[i];
            } else {
               zeroCount++;
            }
        }

        if (zeroCount > 1) {
            return new Array(nums.length).fill(0);
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = nums[i] === 0 ? total : 0;
            } else {
               res[i] = total / nums[i];
            }
        }

        return res;
    }
}
