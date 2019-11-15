import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";
export const prepend = (subject) => (item) => {
    if (isElement(item) || isDocument(item) || isFragment(item)) {
        item.prepend(subject);
        item.normalize();
    }
    return item;
};
