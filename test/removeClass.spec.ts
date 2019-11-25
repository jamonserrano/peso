import { removeClass } from "../src/removeClass";
import { mockHTMLElement, mockText, mockDocument, mockFragment, mockSVGElement } from "./helpers/nodes";

describe("removeClass", () => {
	const className = "a";

	it("should be curried", () => {
		expect(removeClass.length).toBe(1);
		const result = removeClass(className);
		expect(typeof result).toBe("function");
	});

	it("should work on html elements", () => {
		const el = mockHTMLElement();
		el.classList.remove = jest.fn();

		const result = removeClass(className)(el);
		
		expect(result).toBe(el);
		expect(el.classList.remove).toBeCalledWith(className);
	});

	it("should work on svg elements", () => {
		const el = mockSVGElement();
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
