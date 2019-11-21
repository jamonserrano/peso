import { isElement } from "./isElement";

export const setAttr = (attributes: { [attribute: string]: string }) => (
	item: Element | Text | Document | DocumentFragment
) => {
	if (isElement(item)) {
		Object.entries(attributes).forEach(([attribute, value]) =>
			item.setAttribute(attribute, value)
		);
	}

	return item;
};
