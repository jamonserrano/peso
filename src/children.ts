import { Item } from "./types";

export const children = (item: Item) => {
	if (
		item instanceof Element ||
		item instanceof Document ||
		item instanceof DocumentFragment
	) {
		return [...item.children];
	} else {
		return [];
	}
};
