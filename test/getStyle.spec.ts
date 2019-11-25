import { getStyle } from "../src/getStyle";
import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("getStyle", () => {
	it("should get the computed style", () => {
		const item = mockHTMLElement();
		const name = "a";
		const value = "b";
		const getPropertyValue = jest.fn().mockReturnValue(value);
		window.getComputedStyle = jest.fn().mockReturnValue({ getPropertyValue });

		const result = getStyle(name)(item);

		expect(getPropertyValue).toBeCalledWith(name);
		expect(result).toEqual(value);
	});
});
