import { isElement } from "./isElement";
export const hasClass = (className) => (item) => isElement(item) && item.classList.contains(className);
