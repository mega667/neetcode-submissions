class Solution {
   
    
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const a = new Set();
        for (let num of nums) {
            if (a.has(num)) {
                return true;
            }
            a.add(num);
        }
        return false;
    }
}

const nums=[1,2,3,4];
const solution = new Solution();
const result = solution.hasDuplicate(nums);
