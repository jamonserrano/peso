import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";

export const findAll = (selector: string) => (
	item: Element | Text | Document | DocumentFragment
) =>
	isElement(item) || isDocument(item) || isFragment(item)
		? [...item.querySelectorAll(`:scope ${selector}`)]
		: [];
