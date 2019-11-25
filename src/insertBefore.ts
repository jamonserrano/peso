export const insertBefore = (target: Element | Text) => (
	item: Element | Text | DocumentFragment | string
) => {
	target.before(item);
	target.parentNode && target.parentNode.normalize();

	return item;
};
