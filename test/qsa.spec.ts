import { qsa } from "../src/qsa";

describe("qsa", () => {
	it("should call document.querySelector", () => {
		const selector = "a";
		const value = "b";
		document.querySelectorAll = jest.fn().mockReturnValue(value);

		const result = qsa(selector);

		expect(document.querySelectorAll).toBeCalledWith(selector);
		expect(result).toEqual([...value]);
	});
});
