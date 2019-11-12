import { Item } from "./types";

export const replace = (target: Item) => {
	if (target instanceof Element || target instanceof Text) {
		return (item: Item) => {
			target.replaceWith(item);
			target.parentNode && target.parentNode.normalize();
			return item;
		};
	} else {
		return (item: Item) => item;
	}
};
