import { toggleClass } from "../src/toggleClass";
import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("toggleClass", () => {
	const className = "a";

	it("should call classList.toggle()", () => {
		const el = mockHTMLElement();
		el.classList.toggle = jest.fn();

		const result = toggleClass(className)(el);

		expect(result).toBe(el);
		expect(el.classList.toggle).toBeCalledWith(className);
	});

});
