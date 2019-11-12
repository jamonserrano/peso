import { Item } from "./types";

export const getData = (key: string) => (item: Item) =>
	item instanceof HTMLElement ? item.dataset[key] : null;
