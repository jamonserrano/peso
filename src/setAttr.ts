import { Item } from "./types";

export const setAttr = (attribute: string, value: any) => (item: Item) => {
	item instanceof Element && item.setAttribute(attribute, value);

	return item;
};
