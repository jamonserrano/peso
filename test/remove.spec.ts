import { remove } from "../src/remove";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("remove", () => {
	it("should call remove()", () => {
		const item = mockHTMLElement();
		item.remove = jest.fn();
		const parent = mockHTMLElement();
		parent.normalize = jest.fn();
		parent.appendChild(item);

		const result = remove(item);

		expect(result).toBeUndefined;
		expect(item.remove).toBeCalled();
		expect(parent.normalize).toBeCalled();
	});
});
