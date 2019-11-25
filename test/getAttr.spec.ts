import { getAttr } from "../src/getAttr";

import { mockHTMLElement } from "./helpers/nodes";

describe("getAttr", () => {
	it("should call getAttribute()", () => {
		const item = mockHTMLElement();
		const attribute = "a";
		const value = "b";
		item.getAttribute = jest.fn().mockReturnValue(value);

		const result = getAttr(attribute)(item);

		expect(result).toBe(value);
		expect(item.getAttribute).toBeCalledWith(attribute);
	});
});
