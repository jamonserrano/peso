import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";

export const findOne = (selector: string) => (
	item: Element | Text | Document | DocumentFragment
) =>
	isElement(item) || isDocument(item) || isFragment(item)
		? item.querySelector(`:scope ${selector}`)
		: null;
