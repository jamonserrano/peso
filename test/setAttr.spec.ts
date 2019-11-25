import { setAttr } from "../src/setAttr";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("setAttr", () => {
	it("should call setAttribute()", () => {
		const item = mockHTMLElement();
		const attribute = "a";
		const value = "b";
		item.setAttribute = jest.fn();

		const result = setAttr({ [attribute]: value })(item);

		expect(result).toBe(item);
		expect(item.setAttribute).toBeCalledWith(attribute, value);
	});
});
