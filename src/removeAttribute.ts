import { Item } from "./types";

export const removeAttribute = (attribute: string) => (item: Item) => {
	item instanceof Element && item.removeAttribute(attribute);

	return item;
};
