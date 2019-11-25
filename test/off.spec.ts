import { off } from "../src/off";
import { mockHTMLElement } from "./helpers/nodes";

describe("off", () => {
	it("should call removeEventListener", () => {
		const item = mockHTMLElement();
		item.removeEventListener = jest.fn();
		const options = {};
		const listener = () => {};
		const type = "click";

		const result = off(options)(listener)(type)(item);

		expect(result).toBe(item);
		expect(item.removeEventListener).toBeCalledWith(type, listener, options);
	});
})