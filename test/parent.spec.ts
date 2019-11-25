import { parent } from "../src/parent";

import { mockHTMLElement } from "./helpers/nodes";

describe("parent", () => {
	it("should return the parent of the item", () => {
		const item = mockHTMLElement();
		const parentElement = mockHTMLElement();
		parentElement.appendChild(item);

		const result = parent(item);
		expect(result).toEqual(parentElement);
	});
});
