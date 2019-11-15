import { Item } from "./types";
import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";

export const findAll = (selector: string) => (item: Item) => {
	if (isElement(item)) {
		const originalId = item.id;
		const didNotHaveId = !originalId;
		const id = originalId || "peso-temp-id";

		didNotHaveId && item.setAttribute("id", id);
		const result = item.querySelectorAll(`#${id} ${selector}`);
		didNotHaveId && item.removeAttribute("id");
		return [...result];
	} else if (isDocument(item) || isFragment(item)) {
		return [...item.querySelectorAll(selector)];
	} else {
		return [];
	}
};
