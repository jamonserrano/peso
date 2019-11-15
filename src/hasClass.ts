import { Item } from "./types";
import { isElement } from "./isElement";

export const hasClass = (className: string) => (item: Item) =>
	isElement(item) && item.classList.contains(className);
