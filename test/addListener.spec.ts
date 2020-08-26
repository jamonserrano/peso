import { addListener } from "../src/addListener";
import { mockHTMLElement } from "./helpers/mockHTMLElement";

describe("addListener", () => {
	it("should call addEventListener", () => {
		const item = mockHTMLElement();
		item.addEventListener = jest.fn();
		const options = {};
		const listener = () => {};
		const type = "click";

		const result = addListener(options)(listener)(type)(item);

		expect(result).toBe(item);
		expect(item.addEventListener).toBeCalledWith(type, listener, options);
	});
})