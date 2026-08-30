class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const min = this.getMin()
        const nextMin = (min === null || min > val) ? val : min;
        this.minStack.push(nextMin);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return null;
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }
}
