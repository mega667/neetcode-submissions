class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const freqMap = new Map();
        let res = 0;
        let maxCount = 0;

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
            if (freqMap.get(num) > maxCount) {
                maxCount = freqMap.get(num);
                res = num;
            }
        }
        return res;
    }
}
