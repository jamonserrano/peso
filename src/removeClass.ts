import { Item } from "./types";
import { isElement } from "./isElement";

export const removeClass = (className: string) => (item: Item) => {
	isElement(item) && item.classList.remove(className);

	return item;
};
