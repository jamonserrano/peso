import { Item } from "./types";
import { isHTMLElement } from "./isHTMLElement";

export const getData = (key: string) => (item: Item) =>
	isHTMLElement(item) ? item.dataset[key] : null;
