import { measure } from "../src/measure";

import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("measure", () => {
	it("should call getBoundingClientRect()", () => {
		const item = mockHTMLElement();
		const rect = {
			bottom: 0,
			height: 0,
			left: 0,
			right: 0,
			top: 0,
			width: 0,
			x: 0,
			y: 0,
			toJSON: () => {}
		};
		item.getBoundingClientRect = jest.fn(() => rect);

		const result = measure(item);

		expect(result).toBe(rect);
		expect(item.getBoundingClientRect).toBeCalled();
	});
});
