import { isElement } from "./isElement";
export const setAttr = (attributes) => (item) => {
    if (isElement(item)) {
        Object.entries(attributes).forEach(([attribute, value]) => item.setAttribute(attribute, value));
    }
    return item;
};
