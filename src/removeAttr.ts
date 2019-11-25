export const removeAttr = (attribute: string) => (item: Element) => {
	item.removeAttribute(attribute);

	return item;
};
