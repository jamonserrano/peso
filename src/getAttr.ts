import { Item } from "./types";
import { isElement } from "./isElement";

export const getAttr = (attribute: string) => (item: Item) =>
	isElement(item) ? item.getAttribute(attribute) : null;
