import { Item } from "./types";

export const insertBefore = (target: Item) => {
	if (target instanceof Element || target instanceof Text) {
		return (item: Item) => {
			target.before(item);
			target.parentNode && target.parentNode.normalize();
			return item;
		};
	} else {
		return (item: Item) => item;
	}
};
