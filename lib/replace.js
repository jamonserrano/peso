import { isElement } from "./isElement";
import { isText } from "./isText";
export const replace = (target) => (item) => {
    if (isElement(target) || isText(target)) {
        const parentNode = target.parentNode;
        target.replaceWith(item);
        parentNode && parentNode.normalize();
    }
    return item;
};
