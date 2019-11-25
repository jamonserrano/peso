import { before } from "../src/before";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("before", () => {
	it("should call before()", () => {
		const item = mockHTMLElement();
		item.before = jest.fn();
		const parent = mockHTMLElement();
		parent.normalize = jest.fn();
		parent.appendChild(item);
		const subject = "a";

		const result = before(subject)(item);

		expect(result).toBe(item);
		expect(item.before).toBeCalledWith(subject);
		expect(parent.normalize).toBeCalled();
	});
});
