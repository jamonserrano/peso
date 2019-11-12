import { Item } from "./types";

export const measure = (item: Item) => {
	if (item instanceof Element) {
		return item.getBoundingClientRect();
	} else {
		return null;
	}
};
