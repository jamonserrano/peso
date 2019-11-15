import { isHTMLElement } from "./isHTMLElement";
export const removeData = (key) => (item) => {
    isHTMLElement(item) && delete item.dataset[key];
    return item;
};
