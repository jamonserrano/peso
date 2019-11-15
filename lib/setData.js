import { isHTMLElement } from "./isHTMLElement";
export const setData = (key, value) => (item) => {
    if (isHTMLElement(item)) {
        item.dataset[key] = value;
    }
    return item;
};
