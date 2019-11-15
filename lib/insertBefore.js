import { isElement } from "./isElement";
import { isText } from "./isText";
export const insertBefore = (target) => (item) => {
    if (isElement(target) || isText(target)) {
        target.before(item);
        target.parentNode && target.parentNode.normalize();
    }
    return item;
};
