import { Item } from "./types";

export const findAll = (selector: string) => (item: Item) => {
	if (item instanceof Element) {
		const originalId = item.id;
		const didNotHaveId = !originalId;
		const id = originalId || "jamon-temporary-id";

		didNotHaveId && item.setAttribute("id", id);
		const result = item.querySelectorAll(`#${id} ${selector}`);
		didNotHaveId && item.removeAttribute("id");
		return [...result];
	} else if (item instanceof Document || item instanceof DocumentFragment) {
		return [...item.querySelectorAll(selector)];
	}
};
