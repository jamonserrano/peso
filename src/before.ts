export const before = (subject: Element | Text | DocumentFragment | string) => (
	item: Element | Text
) => {
	item.before(subject);
	item.parentNode && item.parentNode.normalize();

	return item;
};
