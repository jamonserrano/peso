import { isHTMLElement } from "./isHTMLElement";
export const setData = (data) => (item) => {
    if (isHTMLElement(item)) {
        Object.entries(data).forEach(([key, value]) => (item.dataset[key] = value));
    }
    return item;
};
