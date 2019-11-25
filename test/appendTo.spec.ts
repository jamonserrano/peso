import { appendTo } from "../src/appendTo";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("appendTo", () => {
	it("should call appendTo()", () => {
		const target = mockHTMLElement();
		target.append = jest.fn();
		target.normalize = jest.fn();
		const item = "a";

		const result = appendTo(target)(item);

		expect(result).toBe(item);
		expect(target.append).toBeCalledWith(item);
		expect(target.normalize).toBeCalled();
	});
});
