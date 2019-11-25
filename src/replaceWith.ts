export const replaceWith = (
	subject: Element | Text | DocumentFragment | string
) => (item: Element | Text) => {
	const parentNode = item.parentNode;
	item.replaceWith(subject);
	parentNode && parentNode.normalize();

	return item;
};
