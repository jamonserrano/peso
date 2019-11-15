import { isElement } from "./isElement";
import { isText } from "./isText";
export const insertAfter = (target) => (item) => {
    if (isElement(target) || isText(target)) {
        target.after(item);
        target.parentNode && target.parentNode.normalize();
    }
    return item;
};
