import { hasClass } from "../src/hasClass";
import { mockHTMLElement } from "./helpers/nodes";

describe("hasClass", () => {
	it("should call classList.contains()", () => {
		const className = "a";
		const el = mockHTMLElement();
		el.classList.contains = jest.fn().mockReturnValue(true);

		const result = hasClass(className)(el);

		expect(result).toBe(true);
		expect(el.classList.contains).toBeCalledWith(className);
	});
});
