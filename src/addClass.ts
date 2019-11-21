import { isElement } from "./isElement";

export const addClass = (className: string) => (
	item: Element | Text | Document | DocumentFragment
) => {
	isElement(item) && item.classList.add(...className.split(" "));

	return item;
};
