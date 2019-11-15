import { Item } from "./types";
import { isElement } from "./isElement";

export const removeAttr = (attribute: string) => (item: Item) => {
	isElement(item) && item.removeAttribute(attribute);

	return item;
};
