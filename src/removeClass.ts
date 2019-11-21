import { isElement } from "./isElement";

export const removeClass = (className: string) => (item: Element | Text | Document | DocumentFragment) => {
	isElement(item) && item.classList.remove(...className.split(" "));

	return item;
};
