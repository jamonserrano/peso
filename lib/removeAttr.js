import { isElement } from "./isElement";
export const removeAttr = (attribute) => (item) => {
    isElement(item) && item.removeAttribute(attribute);
    return item;
};
