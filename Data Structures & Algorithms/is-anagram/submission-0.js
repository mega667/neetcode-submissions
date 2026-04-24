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
        }
        for (let j = 0; j < s.length; j++ ) {
            if (b.has(t[j])) {
                b.set(t[j], b.get(t[j]) + 1);
            } else {
                b.set(t[j], 1);
            }
        }
        for (const [key, value] of a) {
            console.log(key, value);
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