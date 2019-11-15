import { Item } from "./types";
import { isHTMLElement } from "./isHTMLElement";

export const removeData = (key: string) => (item: Item) => {
	isHTMLElement(item) && delete item.dataset[key];

	return item;
};
