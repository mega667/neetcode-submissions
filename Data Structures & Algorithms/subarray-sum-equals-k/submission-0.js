class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let currentSum = 0;
        const sumMap = new Map();

        sumMap.set(0, 1);

        for (const n of nums) {
            currentSum += n;
            const target = currentSum - k;

            if (sumMap.has(target)) {
                count += sumMap.get(target);
            }

            sumMap.set(currentSum, (sumMap.get(currentSum) || 0) + 1);
        }

        return count;
    }
}
