import { qs } from "../src/qs";

describe("qs", () => {
	it("should call document.querySelector", () => {
		const selector = "a";
		const value = "b";
		document.querySelector = jest.fn().mockReturnValue(value);

		const result = qs(selector);

		expect(document.querySelector).toBeCalledWith(selector);
		expect(result).toBe(value);
	});
});
