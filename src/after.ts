import { Item } from "./types";
import { isElement } from "./isElement";
import { isText } from "./isText";

export const after = (subject: Item | string) => (item: Item) => {
	if (isElement(item) || isText(item)) {
		item.after(subject);
		item.parentNode && item.parentNode.normalize();
	}

	return item;
};
