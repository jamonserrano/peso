import { isElement } from "./isElement";
export const delegate = (listener, selector) => (e) => {
    const target = e.target;
    isElement(target) && target.matches(selector) && listener.call(target, e);
};
