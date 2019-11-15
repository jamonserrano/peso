import { Item } from "./types";
import { isElement } from "./isElement";
import { isText } from "./isText";

export const before = (subject: Item | string) => (item: Item) => {
	if (isElement(item) || isText(item)) {
		item.before(subject);
		item.parentNode && item.parentNode.normalize();
	}

	return item;
};
