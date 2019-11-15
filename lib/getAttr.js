import { isElement } from "./isElement";
export const getAttr = (attribute) => (item) => isElement(item) ? item.getAttribute(attribute) : null;
