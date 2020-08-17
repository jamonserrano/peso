export const off = (
	listener: (e: Event) => any,
	options: EventListenerOptions = {}
) => (event: string) => (
	item: Element | Text | Document | DocumentFragment | Window
) => {
	item.removeEventListener(event, listener, options);

	return item;
};
