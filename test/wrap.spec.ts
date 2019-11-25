import { wrap } from "../src/wrap";

describe("wrap", () => {
	it("should wrap null", () => {
		expect(wrap(null)).toEqual([]);
	});

	it("should wrap an item", () => {
		const item = 3;
		expect(wrap(item)).toEqual([item]);
	});

	it("should wrap a collection", () => {
		const collection = "a";
		expect(wrap(collection)).toEqual([...collection]);
	});
});
