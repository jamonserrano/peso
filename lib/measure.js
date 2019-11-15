import { isElement } from "./isElement";
export const measure = (item) => isElement(item) ? item.getBoundingClientRect() : null;
