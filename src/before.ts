import { Item } from "./types";

export const before = (subject: Item) => (item: Item) => {
	if (item instanceof Element || item instanceof Text) {
		item.before(subject);
		item.parentNode && item.parentNode.normalize();
	}

	return item;
};
