import { findOne } from "../src/findOne";

import { mockHTMLElement } from "./helpers/nodes";

describe("findOne", () => {
	it("should call scoped querySelector()", () => {
		const item = mockHTMLElement();
		const match = "abc";
		item.querySelector = jest.fn().mockReturnValue(match);
		const selector = "p a";

		const result = findOne(selector)(item);

		expect(result).toEqual(match);
		expect(item.querySelector).toBeCalledWith(`:scope ${selector}`);
	});
});
