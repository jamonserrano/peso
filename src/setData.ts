import { Item } from "./types";

export const setData = (key: string, value: any) => (item: Item) => {
	if (item instanceof HTMLElement) {
		item.dataset[key] = value;
	}

	return item;
};
