import { removeListener } from "../src/removeListener";
import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("removeListener", () => {
	it("should call removeEventListener", () => {
		const item = mockHTMLElement();
		item.removeEventListener = jest.fn();
		const options = {};
		const listener = () => {};
		const type = "click";

		const result = removeListener(options)(listener)(type)(item);

		expect(result).toBe(item);
		expect(item.removeEventListener).toBeCalledWith(type, listener, options);
	});
})