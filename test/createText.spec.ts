import { createText } from "../src/createText";

describe("createText", () => {
	it("should create a text node with the specified content", () => {
		const content = "a";
		const result = createText(content);
		expect(result).toBeInstanceOf(Text);
		expect(result.textContent).toEqual(content);
	});
});
