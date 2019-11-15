import { Item } from "./types";
import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";

export const prependTo = (target: Item) => (item: Item) => {
	if (isElement(target) || isDocument(target) || isFragment(target)) {
		target.prepend(item);
		target.normalize();
	}

	return item;
};
