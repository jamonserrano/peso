import { Item } from "./types";

export const removeClass = (className: string) => (item: Item) => {
	item instanceof Element && item.classList.remove(className);

	return item;
};
