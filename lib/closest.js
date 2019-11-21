import { isElement } from "./isElement";
export const closest = (selector) => (item) => (isElement(item) ? item.closest(selector) : null);
