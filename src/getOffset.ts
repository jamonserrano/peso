import { Item } from "./types";
import { isHTMLElement } from "./isHTMLElement";

export const getOffset = (item: Item) =>
	isHTMLElement(item)
		? {
				left: item.offsetLeft,
				top: item.offsetTop
		  }
		: null;
