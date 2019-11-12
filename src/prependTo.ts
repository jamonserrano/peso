import { Item } from "./types";

export const prependTo = (target: Item) => (item: Item) => {
	if (
		target instanceof Element ||
		target instanceof Document ||
		target instanceof DocumentFragment
	) {
		target.prepend(item);
		target.normalize();
	}
	return item;
};
