import { Item } from "./types";
import { isElement } from "./isElement";

export const measure = (item: Item) => isElement(item) ? item.getBoundingClientRect() : null;
