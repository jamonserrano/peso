import { clone } from "../src/clone";

import { mockHTMLElement } from "./helpers/nodes";

describe("clone", () => {
	it("should call cloneNode()", () => {
		const item = mockHTMLElement();

		const result = clone()(item);

		expect(result).toBeInstanceOf(HTMLElement);
	});

	it("should pass down the `deep` parameter", () => {
		const item = mockHTMLElement();
		const child = mockHTMLElement();
		item.appendChild(child);

		const result = clone(true)(item) as HTMLElement;

		expect(result).toBeInstanceOf(HTMLElement);
		expect(result.children).toHaveLength(1);
	});
});
