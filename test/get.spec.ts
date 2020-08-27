import { get } from "../src/get";

describe("get", () => {
	it("should get the property", () => {
		const key = "a";
		const value = "b"
		const item = {[key]: value};
		
		const result = get(key)(item);

		expect(result).toBe(value);
	});
});
