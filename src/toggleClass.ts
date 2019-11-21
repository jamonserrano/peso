import { isElement } from "./isElement";

export const toggleClass = (className: string) => (
	item: Element | Text | Document | DocumentFragment
) => {
	isElement(item) && item.classList.toggle(className);

	return item;
};
