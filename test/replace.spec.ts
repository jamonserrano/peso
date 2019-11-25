import { replace } from "../src/replace";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("replace", () => {
	it("should call replaceWith()", () => {
		const target = mockHTMLElement();
		target.replaceWith = jest.fn();
		const parent = mockHTMLElement();
		parent.normalize = jest.fn();
		parent.appendChild(target);
		const item = "a";

		const result = replace(target)(item);

		expect(result).toBe(item);
		expect(target.replaceWith).toBeCalledWith(item);
		expect(parent.normalize).toBeCalled();
	});
});
