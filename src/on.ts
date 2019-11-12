import { Item } from "./types";

export const on = (
	event: string,
	listener: (e: Event) => any,
	options: EventListenerOptions = {}
) => (item: Item | Window) => {
	item.addEventListener(event, listener, options);

	return item;
};
