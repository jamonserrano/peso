import { Item } from "./types";

export const setProp = (property: string, value: any) => (item: Item) => {
	item[property] = value;

	return item;
};
