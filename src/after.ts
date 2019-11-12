import { Item } from "./types";

export const after = (subject: Item | string) => (item: Item) => {
	if (item instanceof Element || item instanceof Text) {
		item.after(subject);
		item.parentNode && item.parentNode.normalize();
	}

	return item;
};
