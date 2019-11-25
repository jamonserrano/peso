import { closest } from "../src/closest";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("closest", () => {
	it("should call closest()", () => {
		const item = mockHTMLElement();
		item.closest = jest.fn();
		const selector = "a";

		const result = closest(selector)(item);
		expect(result).toBeNull;
		expect(item.closest).toBeCalledWith(selector);
	});
});
