import { isElement } from "./isElement";
export const toggleClass = (className) => (item) => {
    isElement(item) && item.classList.toggle(className);
    return item;
};
