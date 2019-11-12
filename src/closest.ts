import { Item } from "./types";

export const closest = (selector: string) => (item: Item) => {
	if (item instanceof Element) {
		return item.closest(selector);
	} else {
		return null;
	}
};
