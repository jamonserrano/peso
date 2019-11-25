import { unwrap } from "../src/unwrap";

describe("unwrap", () => {
	it("should unwrap an item", () => {
		const item = 3;
		expect(unwrap(item)).toEqual(item);
	});

	it("should unwrap an array", () => {
		const item = 3;
		const collection = [item];
		expect(unwrap(collection)).toEqual(item);
	});

	it("should unwrap a deep array", () => {
		const item = 3;
		const collection = [[item]];
		expect(unwrap(collection)).toEqual(item);
	});
});
