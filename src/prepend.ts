import { Item } from "./types";

export const prepend = (subject: Item | string) => (item: Item) => {
	if (
		item instanceof Element ||
		item instanceof Document ||
		item instanceof DocumentFragment
	) {
		item.prepend(subject);
		item.normalize();
	}
	return item;
};
