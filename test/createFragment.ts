import { createFragment } from "../src/createFragment";

describe("createFragment", () => {
	it("should create a document fragment", () => {
		const result = createFragment();
		expect(result).toBeInstanceOf(DocumentFragment);
	});
});
