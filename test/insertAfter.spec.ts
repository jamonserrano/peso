import { insertAfter } from "../src/insertAfter";

import { mockHTMLElement } from "./helpers/nodes";

describe("insertAfter", () => {
	it("should call after()", () => {
		const target = mockHTMLElement();
		target.after = jest.fn();
		const parent = mockHTMLElement();
		parent.normalize = jest.fn();
		parent.appendChild(target);
		const item = "a";

		const result = insertAfter(target)(item);

		expect(result).toBe(item);
		expect(target.after).toBeCalledWith(item);
		expect(parent.normalize).toBeCalled();
	});
});
