import { Item } from "./types";

export const removeAttr = (attribute: string) => (item: Item) => {
	item instanceof Element && item.removeAttribute(attribute);

	return item;
};
