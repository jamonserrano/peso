import { Item } from "./types";

export const prependTo = (target: Item) => {
	if (
		target instanceof Element ||
		target instanceof Document ||
		target instanceof DocumentFragment
	) {
		return (item: Item) => {
			target.prepend(item);
			target.normalize();
			return item;
		};
	} else {
		return (item: Item) => item;
	}
};
