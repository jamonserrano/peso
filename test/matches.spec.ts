import { matches } from "../src/matches";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("matches", () => {
	it("should call Element.matches()", () => {
		const item = mockHTMLElement();
		const selector = 'div';
		const returnValue = true;
		item.matches = jest.fn(() => returnValue);

		const result = matches(selector)(item);

		expect(result).toBe(returnValue);
		expect(item.matches).toBeCalledWith(selector);
	});
});