import { prepend } from "../src/prepend";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("prepend", () => {
	it("should call prepend()", () => {
		const item = mockHTMLElement();
		item.prepend = jest.fn();
		item.normalize = jest.fn();
		const subject = "a";

		const result = prepend(subject)(item);

		expect(result).toBe(item);
		expect(item.prepend).toBeCalledWith(subject);
		expect(item.normalize).toBeCalled();
	});
});
