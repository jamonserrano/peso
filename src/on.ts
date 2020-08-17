export const on = (
	listener: (e: Event) => any,
	options: EventListenerOptions = {}
) => (event: string) => (
	item: Element | Text | Document | DocumentFragment | Window
) => {
	item.addEventListener(event, listener, options);

	return item;
};
