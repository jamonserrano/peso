import { Item } from "./types";

export const remove = (item: Item) => {
	if (item instanceof Element || item instanceof Text) {
		const parentNode = item.parentNode;
		item.remove();
		parentNode && parentNode.normalize();
	}
};
