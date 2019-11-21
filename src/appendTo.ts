import { isFragment } from "./isFragment";
import { isElement } from "./isElement";
import { isDocument } from "./isDocument";

export const appendTo = (
	target: Element | Text | Document | DocumentFragment
) => (item: Element | Text | Document | DocumentFragment) => {
	if (isElement(target) || isDocument(target) || isFragment(target)) {
		target.append(item);
		target.normalize();
	}

	return item;
};
