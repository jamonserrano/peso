import { insertBefore } from "../src/insertBefore";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("insertBefore", () => {
	it("should call before()", () => {
		const target = mockHTMLElement();
		target.before = jest.fn();
		const parent = mockHTMLElement();
		parent.normalize = jest.fn();
		parent.appendChild(target);
		const item = "a";

		const result = insertBefore(target)(item);

		expect(result).toBe(item);
		expect(target.before).toBeCalledWith(item);
		expect(parent.normalize).toBeCalled();
	});
});
