import { Item } from "./types";

export const insertBefore = (target: Item) => (item: Item) => {
	if (target instanceof Element || target instanceof Text) {
		target.before(item);
		target.parentNode && target.parentNode.normalize();
	}
	return item;
};
