import { Item } from "./types";
import { isElement } from "./isElement";
import { isText } from "./isText";

export const remove = (item: Item) => {
	if (isElement(item) || isText(item)) {
		const parentNode = item.parentNode;
		item.remove();
		parentNode && parentNode.normalize();
	}
};
