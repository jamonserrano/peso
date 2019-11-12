import { Item } from "./types";

export const insertAfter = (target: Item) => (item: Item) => {
	if (target instanceof Element || target instanceof Text) {
		target.after(item);
		target.parentNode && target.parentNode.normalize();
	}

	return item;
};
