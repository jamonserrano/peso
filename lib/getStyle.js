import { isElement } from "./isElement";
export const getStyle = (name) => (item) => isElement(item) ? window.getComputedStyle(item).getPropertyValue(name) : null;
