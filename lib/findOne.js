import { isElement } from "./isElement";
import { isDocument } from "./isDocument";
import { isFragment } from "./isFragment";
export const findOne = (selector) => (item) => {
    if (isElement(item)) {
        const originalId = item.id;
        const didNotHaveId = !originalId;
        const id = originalId || "peso-temp-id";
        didNotHaveId && item.setAttribute("id", id);
        const result = item.querySelector(`#${id} ${selector}`);
        didNotHaveId && item.removeAttribute("id");
        return result;
    }
    else if (isDocument(item) || isFragment(item)) {
        return item.querySelector(selector);
    }
    else {
        return null;
    }
};
