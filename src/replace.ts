import { Item } from "./types";

export const replace = (target: Item) => (item: Item) => {
	if (target instanceof Element || target instanceof Text) {
		const parentNode = target.parentNode;
		target.replaceWith(item);
		parentNode && parentNode.normalize();
	}

	return item;
};
