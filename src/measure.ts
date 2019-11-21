import { isElement } from "./isElement";

export const measure = (item: Element | Text | Document | DocumentFragment) =>
	isElement(item) ? item.getBoundingClientRect() : null;
