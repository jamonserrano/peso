import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";

export const children = (item: Element | Text | Document | DocumentFragment) =>
	isElement(item) || isDocument(item) || isFragment(item)
		? [...item.children]
		: [];
