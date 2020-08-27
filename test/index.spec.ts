import * as peso from "../src";

describe("peso", () => {
	it("should export all the functions", () => {
		const exports = [
			"addClass",
			"addListener",
			"after",
			"append",
			"appendTo",
			"before",
			"children",
			"clone",
			"closest",
			"createElement",
			"createFragment",
			"createText",
			"delegate",
			"findAll",
			"findOne",
			"forceClass",
			"getAttr",
			"getData",
			"getStyle",
			"hasClass",
			"insertAfter",
			"insertBefore",
			"matches",
			"measure",
			"parent",
			"prepend",
			"prependTo",
			"qs",
			"$",
			"qsa",
			"$$",
			"remove",
			"removeAttr",
			"removeClass",
			"removeData",
			"removeListener",
			"replace",
			"replaceWith",
			"set",
			"setAttr",
			"setData",
			"setStyle",
			"toggleClass"
		];

		expect(Object.keys(peso)).toEqual(exports);
	});
});
