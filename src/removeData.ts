import { isHTMLElement } from "./isHTMLElement";

export const removeData = (key: string) => (item: Element | Text | Document | DocumentFragment) => {
	isHTMLElement(item) && delete item.dataset[key];

	return item;
};
