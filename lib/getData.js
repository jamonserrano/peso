import { isHTMLElement } from "./isHTMLElement";
export const getData = (key) => (item) => isHTMLElement(item) ? item.dataset[key] : null;
