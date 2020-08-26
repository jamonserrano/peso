export const on = (options: EventListenerOptions = {}) => (
	listener: (e: Event) => any
) => (event: string) => (
	item: Element | Text | Document | DocumentFragment | Window
) => {
	item.addEventListener(event, listener, options);

	return item;
};
