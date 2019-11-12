import { Item } from "./types";

export const replace = (target: Item) => (item: Item) => {
	if (target instanceof Element || target instanceof Text) {
		target.replaceWith(item);
	}

	return item;
};
