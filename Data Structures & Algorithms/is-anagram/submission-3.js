class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let A = new Array(26).fill(0);
        let B = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            A[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            B[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const resS = A.join(',');
        const resT = B.join(',');
        if (resS == resT) {
            return true;
        }
        return false;
    }
}

const s = "racecar", t = "carrace";

const solution = new Solution();
const result = solution.isAnagram(s, t);