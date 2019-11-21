import { isElement } from "./isElement";
import { isText } from "./isText";

export const replaceWith = (subject: Element | Text | Document | DocumentFragment | string) => (item: Element | Text | Document | DocumentFragment) => {
	if (isElement(item) || isText(item)) {
		const parentNode = item.parentNode;
		item.replaceWith(subject);
		parentNode && parentNode.normalize();
	}

	return item;
};
