import { isElement } from "./isElement";

export const getStyle = (name: string) => (
	item: Element | Text | Document | DocumentFragment
) =>
	isElement(item) ? window.getComputedStyle(item).getPropertyValue(name) : null;
