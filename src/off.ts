import { Item } from "./types";

export const off = (
	event: string,
	listener: (e: Event) => any,
	options: EventListenerOptions = {}
) => (item: Item | Window) => {
	item.removeEventListener(event, listener, options);

	return item;
};
