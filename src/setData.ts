import { Item } from "./types";
import { isHTMLElement } from "./isHTMLElement";

export const setData = (key: string, value: any) => (item: Item) => {
	if (isHTMLElement(item)) {
		item.dataset[key] = value;
	}

	return item;
};
