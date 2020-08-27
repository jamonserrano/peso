import { set } from "../src/set";

describe("se", () => {
	it("should set the property", () => {
		const item = {};
		const key = "a";
		const value = "b";
		
		const result = set(key)(value)(item);

		expect(result).toBe(item);
		expect(item["a"]).toBe(value);
	});
});
