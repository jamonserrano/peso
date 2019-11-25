export const appendTo = (target: Element | Document | DocumentFragment) => (
	item: Element | Text | DocumentFragment | string
) => {
	target.append(item);
	target.normalize();

	return item;
};
