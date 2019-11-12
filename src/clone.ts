import { Item } from "./types";

export const clone = (deep: boolean) => (item: Item) => item.cloneNode(deep);
