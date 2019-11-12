import { Item } from "./types";

export const replaceWith = (subject: Item | string) => (item: Item) => {
	if (item instanceof Element || item instanceof Text) {
		item.replaceWith(subject);
	}

	return item;
};
