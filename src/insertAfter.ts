import { Item } from "./types";

export const insertAfter = (target: Item) => {
	if (target instanceof Element || target instanceof Text) {
		return (item: Item) => {
			target.after(item);
			target.parentNode && target.parentNode.normalize();
			return item;
		};
	} else {
		return (item: Item) => item;
	}
};
