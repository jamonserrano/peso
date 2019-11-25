export const after = (subject: Element | Text | DocumentFragment | string) => (
	item: Element | Text
) => {
	item.after(subject);
	item.parentNode && item.parentNode.normalize();

	return item;
};
