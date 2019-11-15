import { Item } from "./types";
import { isFragment } from "./isFragment";
import { isElement } from "./isElement";
import { isDocument } from "./isDocument";

export const appendTo = (target: Item) => (item: Item) => {
	if (isElement(target) || isDocument(target) || isFragment(target)) {
		target.append(item);
		target.normalize();
	}

	return item;
};
