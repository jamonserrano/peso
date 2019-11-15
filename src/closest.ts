import { Item } from "./types";
import { isElement } from "./isElement";

export const closest = (selector: string) => (item: Item) =>
	isElement(item) ? item.closest(selector) : null;
