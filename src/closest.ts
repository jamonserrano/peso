import { isElement } from "./isElement";

export const closest = (selector: string) => (item: Element | Text | Document | DocumentFragment) =>
	isElement(item) ? item.closest(selector) : null;
