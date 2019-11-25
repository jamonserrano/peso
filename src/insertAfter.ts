export const insertAfter = (target: Element | Text) => (
	item: Element | Text | DocumentFragment | string
) => {
	target.after(item);
	target.parentNode && target.parentNode.normalize();

	return item;
};
