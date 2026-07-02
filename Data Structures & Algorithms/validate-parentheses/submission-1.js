class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        let stack = []

        for (const c of s) {
            if (map[c]) {
                if (stack.pop() !== map[c]) return false;
            } else {
                stack.push(c);
            }
        }

        return stack.length == 0;
    }
}
