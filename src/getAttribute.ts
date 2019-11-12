import { Item } from "./types";

export const getAttribute = (attribute: string) => (item: Item) =>
	item instanceof Element ? item.getAttribute(attribute) : null;
