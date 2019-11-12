import { Item } from "./types";

export const append = (subject: Item) => (item: Item) => {
	if (
		item instanceof Element ||
		item instanceof Document ||
		item instanceof DocumentFragment
	) {
		item.append(subject.cloneNode(true));
		item.normalize();
	}

	return item;
};
