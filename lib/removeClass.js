import { isElement } from "./isElement";
export const removeClass = (className) => (item) => {
    isElement(item) && item.classList.remove(...className.split(" "));
    return item;
};
