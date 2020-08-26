import { createElement } from "../src/createElement";

describe("createElement", () => {
	it("should create an HTML element of the specified type", () => {
		const type = "a";
		const result = createElement(type);
		expect(result).toBeInstanceOf(HTMLAnchorElement);
		expect(result.nodeName.toLowerCase()).toEqual(type);
	});
});
