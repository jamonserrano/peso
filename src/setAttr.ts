import { Item } from "./types";
import { isElement } from "./isElement";

export const setAttr = (attribute: string, value: any) => (item: Item) => {
	isElement(item) && item.setAttribute(attribute, value);

	return item;
};
