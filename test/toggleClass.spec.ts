import { toggleClass } from "../src/toggleClass";
import {
	mockHTMLElement,
	mockText,
	mockDocument,
	mockFragment,
	mockSVGElement
} from "./helpers/nodes";

describe("toggleClass", () => {
	const className = "a";

	it("should be curried", () => {
		expect(toggleClass.length).toBe(1);
		const result = toggleClass(className);
		expect(typeof result).toBe("function");
	});

	it("should work on html elements", () => {
		const el = mockHTMLElement();
		el.classList.toggle = jest.fn();

		const result = toggleClass(className)(el);

		expect(result).toBe(el);
		expect(el.classList.toggle).toBeCalledWith(className);
	});

	it("should work on svg elements", () => {
		const el = mockSVGElement();
		el.classList.toggle = jest.fn();

		const result = toggleClass(className)(el);

		expect(result).toBe(el);
		expect(el.classList.toggle).toBeCalledWith(className);
	});

	it("should skip non-element targets", () => {
		const txt = mockText();
		const fr = mockFragment();
		const doc = mockDocument();

		const toggle = toggleClass(className);

		expect(toggle(txt)).toBe(txt);
		expect(toggle(fr)).toBe(fr);
		expect(toggle(doc)).toBe(doc);
	});
});
