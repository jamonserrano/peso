import { addClass } from "../src/addClass";
import { mockHTMLElement } from "./helpers/nodes";

describe("addClass", () => {
	const className = "a";

	it("should call classList.add()", () => {
		const el = mockHTMLElement();
		el.classList.add = jest.fn();

		const result = addClass(className)(el);

		expect(result).toBe(el);
		expect(el.classList.add).toBeCalledWith(className);
	});

	it("should work with multiple class names", () => {
		const el = mockHTMLElement();
		const classNames = "a b";
		el.classList.add = jest.fn();

		const result = addClass(classNames)(el);
		expect(el.classList.add).toBeCalledWith(...classNames.split(" "));
	});
});
