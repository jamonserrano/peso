import { Item } from "./types";

export const getAttr = (attribute: string) => (item: Item) =>
	item instanceof Element ? item.getAttribute(attribute) : null;
