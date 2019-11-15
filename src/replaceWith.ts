import { Item } from "./types";

export const replaceWith = (subject: Item | string) => (item: Item) => {
	if (item instanceof Element || item instanceof Text) {
		const parentNode = item.parentNode;
		item.replaceWith(subject);
		parentNode && parentNode.normalize();
	}

	return item;
};
