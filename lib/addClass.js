import { isElement } from "./isElement";
export const addClass = (className) => (item) => {
    isElement(item) && item.classList.add(...className.split(" "));
    return item;
};
