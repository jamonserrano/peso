export const prependTo = (target: Element | Document | DocumentFragment) => (
	item: Element | Text | DocumentFragment | string
) => {
	target.prepend(item);
	target.normalize();

	return item;
};
