export const append = (subject: Element | Text | DocumentFragment | string) => (
	item: Element | Document | DocumentFragment
) => {
	item.append(subject);
	item.normalize();

	return item;
};
