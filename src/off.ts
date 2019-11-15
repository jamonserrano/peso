import { Item } from "./types";

export const off = (
	listener: (e: Event) => any,
	options: EventListenerOptions = {}
) => (event: string) => (item: Item | Window) => {
	item.removeEventListener(event, listener, options);

	return item;
};
