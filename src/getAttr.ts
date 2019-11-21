import { isElement } from "./isElement";

export const getAttr = (attribute: string) => (
	item: Element | Text | Document | DocumentFragment
) => (isElement(item) ? item.getAttribute(attribute) : null);
