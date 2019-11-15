import { Item } from "./types";
import { isElement } from "./isElement";

export const getStyle = (name: string) => (item: Item) =>
	isElement(item) ? window.getComputedStyle(item).getPropertyValue(name) : null;
