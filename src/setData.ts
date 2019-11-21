import { isHTMLElement } from "./isHTMLElement";

export const setData = (data: { [key: string]: any }) => (
	item: Element | Text | Document | DocumentFragment
) => {
	if (isHTMLElement(item)) {
		Object.entries(data).forEach(([key, value]) => (item.dataset[key] = value));
	}

	return item;
};
