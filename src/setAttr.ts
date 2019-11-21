import { isElement } from "./isElement";

export const setAttr = (attribute: string, value: any) => (item: Element | Text | Document | DocumentFragment) => {
	isElement(item) && item.setAttribute(attribute, value);

	return item;
};
