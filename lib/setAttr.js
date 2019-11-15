import { isElement } from "./isElement";
export const setAttr = (attribute, value) => (item) => {
    isElement(item) && item.setAttribute(attribute, value);
    return item;
};
