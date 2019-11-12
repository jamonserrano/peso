import { Item } from "./types";

export const getStyle = (name: string) => (item: Item) =>
	item instanceof Element
		? window.getComputedStyle(item).getPropertyValue(name)
		: null;
