import { prependTo } from "../src/prependTo";

import { mockHTMLElement } from "./helpers/nodes";

describe("prependTo", () => {
	it("should call prependTo()", () => {
		const target = mockHTMLElement();
		target.prepend = jest.fn();
		target.normalize = jest.fn();
		const item = "a";

		const result = prependTo(target)(item);

		expect(result).toBe(item);
		expect(target.prepend).toBeCalledWith(item);
		expect(target.normalize).toBeCalled();
	});
});
