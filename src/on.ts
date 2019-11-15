import { Item } from "./types";

export const on = (
	listener: (e: Event) => any,
	options: EventListenerOptions = {}
) => (event: string) => (item: Item | Window) => {
	item.addEventListener(event, listener, options);

	return item;
};
