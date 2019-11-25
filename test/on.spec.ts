import { on } from "../src/on";
import { mockHTMLElement } from "./helpers/nodes";

describe("on", () => {
	it("should call addEventListener", () => {
		const item = mockHTMLElement();
		item.addEventListener = jest.fn();
		const options = {};
		const listener = () => {};
		const type = "click";

		const result = on(options)(listener)(type)(item);

		expect(result).toBe(item);
		expect(item.addEventListener).toBeCalledWith(type, listener, options);
	});
})