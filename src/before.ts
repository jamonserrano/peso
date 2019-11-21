import { isElement } from "./isElement";
import { isText } from "./isText";

export const before = (subject: Element | Text | Document | DocumentFragment | string) => (item: Element | Text | Document | DocumentFragment) => {
	if (isElement(item) || isText(item)) {
		item.before(subject);
		item.parentNode && item.parentNode.normalize();
	}

	return item;
};
