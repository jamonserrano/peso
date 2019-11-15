import { Item } from "./types";
import { isElement } from "./isElement";

export const toggleClass = (className: string) => (item: Item) => {
	isElement(item) && item.classList.toggle(className);

	return item;
};
