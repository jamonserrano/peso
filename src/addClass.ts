import { Item } from "./types";
import { isElement } from "./isElement";

export const addClass = (className: string) => (item: Item) => {
	isElement(item) && item.classList.add(...className.split(" "));

	return item;
};
