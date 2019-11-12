import { Item } from "./types";

export const getOffset = (item: Item) =>
	item instanceof HTMLElement
		? {
				left: item.offsetLeft,
				top: item.offsetTop
		  }
		: null;
