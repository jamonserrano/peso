import { isHTMLElement } from "./isHTMLElement";

export const getOffset = (item: Element | Text | Document | DocumentFragment) =>
	isHTMLElement(item)
		? {
				left: item.offsetLeft,
				top: item.offsetTop
		  }
		: null;
