import { Item } from "./types";
import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";

export const append = (subject: Item | string) => (item: Item) => {
	if (isElement(item) || isDocument(item) || isFragment(item)) {
		item.append(subject);
		item.normalize();
	}

	return item;
};
