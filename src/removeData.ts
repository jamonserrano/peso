import { Item } from "./types";

export const removeData = (key: string) => (item: Item) => {
	item instanceof HTMLElement && delete item.dataset[key];

	return item;
};
