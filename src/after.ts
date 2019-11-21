import { isElement } from "./isElement";
import { isText } from "./isText";

export const after = (subject: Element | Text | Document | DocumentFragment | string) => (item: Element | Text | Document | DocumentFragment) => {
	if (isElement(item) || isText(item)) {
		item.after(subject);
		item.parentNode && item.parentNode.normalize();
	}

	return item;
};
