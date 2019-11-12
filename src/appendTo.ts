import { Item } from "./types";

export const appendTo = (target: Item) => (item: Item) => {
	if (
		target instanceof Element ||
		target instanceof Document ||
		target instanceof DocumentFragment
	) {
		target.append(item);
		target.normalize();
	}

	return item;
};
