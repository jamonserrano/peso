import { Item } from "./types";

export const removeProperty = (property: string) => (item: Item) => {
	delete item[property];

	return item;
};
