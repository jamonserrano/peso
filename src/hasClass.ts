import { Item } from "./types";

export const hasClass = (className: string) => (item: Item) =>
	item instanceof Element && item.classList.contains(className);
