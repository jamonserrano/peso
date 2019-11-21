import { isElement } from "./isElement";

export const hasClass = (className: string) => (
	item: Element | Text | Document | DocumentFragment
) => isElement(item) && item.classList.contains(className);
