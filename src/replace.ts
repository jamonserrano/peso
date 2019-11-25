export const replace = (target: Element | Text) => (
	item: Element | Text | DocumentFragment | string
) => {
	const parentNode = target.parentNode;
	target.replaceWith(item);
	parentNode && parentNode.normalize();

	return item;
};
