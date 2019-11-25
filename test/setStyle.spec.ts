import { setStyle } from "../src/setStyle";

import { mockHTMLElement } from "./helpers/nodes";

describe("setStyle", () => {
	it("should set the styles", () => {
		const item = mockHTMLElement();
		item.style.setProperty = jest.fn();
		const key1 = "camelCase";
		const value1 = "b";
		const key2 = "kebab-case";
		const value2 = "c";

		const result = setStyle({ [key1]: value1, [key2]: value2 })(item);

		expect(result).toBe(item);
		expect(item.style.setProperty).toBeCalledTimes(2);
		expect(item.style.setProperty).toHaveBeenNthCalledWith(
			1,
			"camel-case",
			value1
		);
		expect(item.style.setProperty).toHaveBeenNthCalledWith(2, key2, value2);
	});
});
