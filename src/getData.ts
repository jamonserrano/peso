import { isHTMLElement } from "./isHTMLElement";

export const getData = (key: string) => (item: Element | Text | Document | DocumentFragment) =>
	isHTMLElement(item) ? item.dataset[key] : null;
