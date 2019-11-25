import { findAll } from "../src/findAll";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("findAll", () => {
	it("should call scoped querySelectorAll()", () => {
		const item = mockHTMLElement();
		const matches = "abc";
		item.querySelectorAll = jest.fn().mockReturnValue(matches);
		const selector = "p a";

		const result = findAll(selector)(item);

		expect(result).toEqual([...matches]);
		expect(item.querySelectorAll).toBeCalledWith(`:scope ${selector}`);
	});
});
