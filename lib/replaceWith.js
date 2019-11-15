import { isElement } from "./isElement";
import { isText } from "./isText";
export const replaceWith = (subject) => (item) => {
    if (isElement(item) || isText(item)) {
        const parentNode = item.parentNode;
        item.replaceWith(subject);
        parentNode && parentNode.normalize();
    }
    return item;
};
