import { getData } from "../src/getData";

import { mockHTMLElement } from "./helpers/nodes";

describe("getData", () => {
	it("should get data attribute", () => {
		const item = mockHTMLElement();
		const key = "a";
		const value = "b";
		item.dataset[key] = value;

		const result = getData(key)(item);

		expect(result).toBe(value);
	});
});
