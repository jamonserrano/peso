import { isElement } from "./isElement";
import { isText } from "./isText";

export const insertAfter = (target: Element | Text | Document | DocumentFragment) => (item: Element | Text | Document | DocumentFragment) => {
	if (isElement(target) || isText(target)) {
		target.after(item);
		target.parentNode && target.parentNode.normalize();
	}

	return item;
};
