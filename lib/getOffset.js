import { isHTMLElement } from "./isHTMLElement";
export const getOffset = (item) => isHTMLElement(item)
    ? {
        left: item.offsetLeft,
        top: item.offsetTop
    }
    : null;
