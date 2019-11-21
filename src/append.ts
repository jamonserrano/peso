import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";

export const append = (subject: Element | Text | Document | DocumentFragment | string) => (item: Element | Text | Document | DocumentFragment) => {
	if (isElement(item) || isDocument(item) || isFragment(item)) {
		item.append(subject);
		item.normalize();
	}

	return item;
};
