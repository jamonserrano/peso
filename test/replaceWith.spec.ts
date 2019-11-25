import { replaceWith } from "../src/replaceWith";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("replaceWith", () => {
	it("should call replaceWith()", () => {
		const item = mockHTMLElement();
		item.replaceWith = jest.fn();
		const parent = mockHTMLElement();
		parent.normalize = jest.fn();
		parent.appendChild(item);
		const subject = "a";

		const result = replaceWith(subject)(item);

		expect(result).toBe(item);
		expect(item.replaceWith).toBeCalledWith(subject);
		expect(parent.normalize).toBeCalled();
	});
});
