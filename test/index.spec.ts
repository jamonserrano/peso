import * as peso from "../src";

describe("peso", () => {
	it("should export all the functions", () => {
		const exports = [
			"addClass",
			"after",
			"append",
			"appendTo",
			"before",
			"children",
			"clone",
			"closest",
			"createElement",
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
			"off",
			"on",
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
			"replace",
			"replaceWith",
			"setAttr",
			"setData",
			"setStyle",
			"toggleClass"
		];

		expect(Object.keys(peso)).toEqual(exports);
	});
});
