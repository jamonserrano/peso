import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";
export const findAll = (selector) => (item) => isElement(item) || isDocument(item) || isFragment(item)
    ? [...item.querySelectorAll(`:scope ${selector}`)]
    : [];
