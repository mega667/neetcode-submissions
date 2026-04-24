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
        const a = new Map();
        const b = new Map();
        for (let i = 0; i < s.length; i++ ) {
            if (a.has(s[i])) {
                a.set(s[i], a.get(s[i]) + 1);
            } else {
                a.set(s[i], 1);
            }
            if (b.has(t[i])) {
                b.set(t[i], b.get(t[i]) + 1);
            } else {
                b.set(t[i], 1);
            }
        }
        for (const [key, value] of a) {
            if (b.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}

const s = "racecar", t = "carrace";

const solution = new Solution();
const result = solution.isAnagram(s, t);