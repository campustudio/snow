class Stack {
	constructor(...items) {
		this.reverse = false;
		this.stack = [...items];
	}

	push(...items) {
		return this.reverse
			? this.stack.unshift(...items)
			: this.stack.push(...items);
	}

	pop() {
		return this.reverse ? this.stack.shift() : this.stack.pop();
	}
}

mocha.setup("bdd");
const { assert } = chai;

describe("Stacks", () => {
	it("Should push items to top of stack", () => {
		const stack = new Stack(4, 5);
		assert.equal(stack.push(1, 2, 3), 5);
		assert.deepEqual(stack.stack, [4, 5, 1, 2, 3]);
	});

	it("Should push items to bottom of stack", () => {
		const stack = new Stack(4, 5);
		stack.reverse = true;
		assert.equal(stack.push(1, 2, 3), 5);
		assert.deepEqual(stack.stack, [1, 2, 3, 4, 5]);
	});

	it("Should pop item from top of stack", () => {
		const stack = new Stack(1, 2, 3);
		assert.equal(stack.pop(), 3);
	});

	it("Should pop item from bottom of stack", () => {
		const stack = new Stack(1, 2, 3);
		stack.reverse = true;
		assert.equal(stack.pop(), 1);
	});
});

mocha.run();
