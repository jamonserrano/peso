export const prepend = (
	subject: Element | Text | Document | DocumentFragment | string
) => (item: Element | Document | DocumentFragment) => {
	item.prepend(subject);
	item.normalize();

	return item;
};
