export const removeListener = (options: EventListenerOptions = {}) => (
	listener: (e: Event) => any
) => (event: string) => (
	item: Element | Text | Document | DocumentFragment | Window
) => {
	item.removeEventListener(event, listener, options);

	return item;
};
