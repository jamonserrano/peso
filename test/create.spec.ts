import { create } from "../src/create";

describe("create", () => {
	it("should create an HTML element of the specified type", () => {
		const type = "a";
		const result = document.createElement(type);
		expect(result).toBeInstanceOf(HTMLElement);
		expect(result.nodeName.toLowerCase()).toEqual(type);
	});
});
