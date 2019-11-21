import { isHTMLElement } from "./isHTMLElement";

export const setData = (key: string, value: any) => (
	item: Element | Text | Document | DocumentFragment
) => {
	if (isHTMLElement(item)) {
		item.dataset[key] = value;
	}

	return item;
};
