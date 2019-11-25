import { removeClass } from "../src/removeClass";
import { mockHTMLElement } from "./helpers/nodes";

describe("removeClass", () => {
	const className = "a";

	it("should call classList.remove()", () => {
		const el = mockHTMLElement();
		el.classList.remove = jest.fn();

		const result = removeClass(className)(el);

		expect(result).toBe(el);
		expect(el.classList.remove).toBeCalledWith(className);
	});

	it("should work with multiple class names", () => {
		const el = mockHTMLElement();
		const classNames = "a b";
		el.classList.remove = jest.fn();

		const result = removeClass(classNames)(el);
		expect(el.classList.remove).toBeCalledWith(...classNames.split(" "));
	});
});
