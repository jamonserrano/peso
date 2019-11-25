import { append } from "../src/append";

import { mockHTMLElement } from "./helpers/nodes";

describe("append", () => {
	it("should call append()", () => {
		const item = mockHTMLElement();
		item.append = jest.fn();
		item.normalize = jest.fn();
		const subject = "a";

		const result = append(subject)(item);

		expect(result).toBe(item);
		expect(item.append).toBeCalledWith(subject);
		expect(item.normalize).toBeCalled();
	});
});
