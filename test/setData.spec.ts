import { setData } from "../src/setData";

import { mockHTMLElement } from "./helpers/nodes";

describe("setData", () => {
	it("should set the data attribute", () => {
		const item = mockHTMLElement();
		const key = "a";
		const value = "b";
		expect(item.dataset[key]).toBeUndefined();

		const result = setData({ [key]: value })(item);

		expect(result).toBe(item);
		expect(item.dataset[key]).toEqual(value);
	});
});
