import { Item } from "./types";
import { isElement } from "./isElement";
import { isText } from "./isText";

export const insertBefore = (target: Item) => (item: Item) => {
	if (isElement(target) || isText(target)) {
		target.before(item);
		target.parentNode && target.parentNode.normalize();
	}

	return item;
};
