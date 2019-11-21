import { addClass } from "../src/addClass";
import { mockHTMLElement, mockText, mockDocument, mockFragment, mockSVGElement } from "./helpers/nodes";

describe("addClass", () => {
	const className = "a";

	it("should be curried", () => {
		expect(addClass.length).toBe(1);
		const result = addClass(className);
		expect(typeof result).toBe("function");
	});

	it("should work on html elements", () => {
		const el = mockHTMLElement();
		el.classList.add = jest.fn();

		const result = addClass(className)(el);
		
		expect(result).toBe(el);
		expect(el.classList.add).toBeCalledWith(className);
	});

	it("should work on svg elements", () => {
		const el = mockSVGElement();
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

	it("should skip non-element targets", () => {
		const items = [mockText(), mockFragment(), mockDocument()]
		const add = addClass(className);

		expect(items.map(add)).toEqual(items);
	});
});
