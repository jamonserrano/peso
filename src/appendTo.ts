import { Item } from "./types";

export const appendTo = (target: Item) => {
	if (
		target instanceof Element ||
		target instanceof Document ||
		target instanceof DocumentFragment
	) {
		return (item: Item) => {
			target.append(item);
			target.normalize();
			return item;
		};
	} else {
		return (item: Item) => item;
	}
};
