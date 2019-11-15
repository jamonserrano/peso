import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";
export const children = (item) => isElement(item) || isDocument(item) || isFragment(item)
    ? [...item.children]
    : [];
