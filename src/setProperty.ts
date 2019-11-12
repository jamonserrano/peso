import { Item } from "./types";

export const setProperty = (property: string, value: any) => (item: Item) => {
	item[property] = value;

	return item;
};
