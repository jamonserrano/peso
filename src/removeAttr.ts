import { isElement } from "./isElement";

export const removeAttr = (attribute: string) => (
	item: Element | Text | Document | DocumentFragment
) => {
	isElement(item) && item.removeAttribute(attribute);

	return item;
};
