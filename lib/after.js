import { isElement } from "./isElement";
import { isText } from "./isText";
export const after = (subject) => (item) => {
    if (isElement(item) || isText(item)) {
        item.after(subject);
        item.parentNode && item.parentNode.normalize();
    }
    return item;
};
