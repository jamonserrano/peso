type Attributes = { [attribute: string]: string };

export const setAttr = (attributes: Attributes) => (item: Element) => {
	Object.entries(attributes).forEach(([attribute, value]) =>
		item.setAttribute(attribute, value)
	);

	return item;
};
