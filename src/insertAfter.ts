import { Item } from "./types";
import { isElement } from "./isElement";
import { isText } from "./isText";

export const insertAfter = (target: Item) => (item: Item) => {
	if (isElement(target) || isText(target)) {
		target.after(item);
		target.parentNode && target.parentNode.normalize();
	}

	return item;
};
