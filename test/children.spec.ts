import { children } from "../src/children";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("children", () => {
	it("should return the children of the item", () => {
		const item = mockHTMLElement();
		const child = mockHTMLElement();
		item.appendChild(child);

		const result = children(item);
		expect(result).toEqual([child]);
	});
});
