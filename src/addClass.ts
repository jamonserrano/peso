import { Item } from "./types";

export const addClass = (className: string) => (item: Item) => {
	item instanceof Element && item.classList.add(className);

	return item;
};
