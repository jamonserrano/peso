import { forceClass } from "../src/forceClass";
import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("forceClass", () => {
	const className = "a";
	const force = false;
	const returnValue = false;
	it("should call classList.toggle()", () => {
		const el = mockHTMLElement();
		el.classList.toggle = jest.fn(() => returnValue);

		const result = forceClass(className)(force)(el);

		expect(result).toBe(returnValue);
		expect(el.classList.toggle).toBeCalledWith(className, force);
	});
});
