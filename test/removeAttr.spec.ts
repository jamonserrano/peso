import { removeAttr } from "../src/removeAttr";

import { mockHTMLElement } from "./helpers/nodes";

describe("removeAttr", () => {
	it("should call removeAttribute()", () => {
		const item = mockHTMLElement();
		const attribute = "a";
		item.removeAttribute = jest.fn();

		const result = removeAttr(attribute)(item);

		expect(result).toBe(item);
		expect(item.removeAttribute).toBeCalledWith(attribute);
	});
});
