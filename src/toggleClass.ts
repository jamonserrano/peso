import { Item } from "./types";

export const toggleClass = (className: string) => (item: Item) => {
	item instanceof Element && item.classList.toggle(className);

	return item;
};
