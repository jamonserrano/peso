import { delegate } from "../src/delegate";
import { mockHTMLElement } from "./helpers/nodes";

describe("delegate", () => {
	it("should call the event listener when the selector is matched", () => {
		const listener = jest.fn();
		const selector = "a";
		const target = mockHTMLElement();
		target.matches = jest.fn().mockReturnValue(true);
		const eventType = "click";
		const event = new CustomEvent(eventType);
		const result = delegate(listener)(selector);

		target.addEventListener(eventType, result, false);
		target.dispatchEvent(event);

		expect(target.matches).toBeCalledWith(selector);
		expect(listener).toBeCalledWith(event);
	});

	it("should not call the event listener when the selector is not matched", () => {
		const listener = jest.fn();
		const selector = "a";
		const target = mockHTMLElement();
		target.matches = jest.fn().mockReturnValue(false);
		const eventType = "click";
		const event = new CustomEvent(eventType);
		const result = delegate(listener)(selector);

		target.addEventListener(eventType, result, false);
		target.dispatchEvent(event);

		expect(target.matches).toBeCalledWith(selector);
		expect(listener).not.toBeCalled();
	});
});
