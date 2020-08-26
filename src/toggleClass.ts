export const toggleClass = (className: string) => (force?: boolean) => (item: Element) => {
	item.classList.toggle(className, force);

	return item;
};
