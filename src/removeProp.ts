import { Item } from "./types";

export const removeProp = (property: string) => (item: Item) => {
	delete item[property];

	return item;
};
