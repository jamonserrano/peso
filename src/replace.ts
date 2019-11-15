import { Item } from "./types";
import { isElement } from "./isElement";
import { isText } from "./isText";

export const replace = (target: Item) => (item: Item) => {
	if (isElement(target) || isText(target)) {
		const parentNode = target.parentNode;
		target.replaceWith(item);
		parentNode && parentNode.normalize();
	}

	return item;
};
