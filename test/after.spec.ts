import { after } from "../src/after";

import { mockHTMLElement } from "./helpers/nodes";

describe("after", () => {
	it("should call after()", () => {
		const item = mockHTMLElement();
		item.after = jest.fn();
		const parent = mockHTMLElement();
		parent.normalize = jest.fn();
		parent.appendChild(item);
		const subject = "a";

		const result = after(subject)(item);

		expect(result).toBe(item);
		expect(item.after).toBeCalledWith(subject);
		expect(parent.normalize).toBeCalled();
	});
});
