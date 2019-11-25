import { removeData } from "../src/removeData";

import { mockHTMLElement } from "./helpers/nodes";

describe("removeData", () => {
	it("should remove data attribute", () => {
		const item = mockHTMLElement();
		const key = "a";
		const value = "b";
		item.dataset[key] = value;

		const result = removeData(key)(item);

		expect(result).toBe(item);
		expect(item.dataset[key]).toBeUndefined;
	});
});
